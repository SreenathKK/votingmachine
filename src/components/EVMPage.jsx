import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { evmLocations, getLevelTheme } from '../data/evmData';

const EVMPage = () => {
  const { locationId } = useParams();
  const [currentLevel, setCurrentLevel] = useState('Ward');
  const [locationData, setLocationData] = useState(null);
  const [theme, setTheme] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [glowingBulb, setGlowingBulb] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentLocationId, setCurrentLocationId] = useState(null);

  useEffect(() => {
    // Set location ID (default to 1 if not provided)
    const locId = locationId || '1';
    setCurrentLocationId(locId);
    
    // Default to Ward level
    setCurrentLevel('Ward');
    updateData('Ward', locId);
  }, [locationId]);

  const updateData = (level, locId = currentLocationId) => {
    const locationData = evmLocations[locId];
    if (locationData && locationData[level]) {
      setLocationData(locationData[level]);
      setTheme(getLevelTheme(level));
    }
  };

  const handleTabClick = (level) => {
    setCurrentLevel(level);
    updateData(level);
    setShowSuccess(false);
    setSelectedCandidate(null);
    setGlowingBulb(null);
  };

  const playBeepSound = () => {
    // Play custom beep sound from external URL or local file
    try {
      const audio = new Audio('/sounds/beep.mp3');
      audio.volume = 0.5; // Adjust volume as needed
      audio.play().catch(error => {
        console.log('Audio playback failed:', error);
        // Fallback to Web Audio API if file fails
        playFallbackBeep();
      });
    } catch (error) {
      console.log('Audio not supported, using fallback');
      playFallbackBeep();
    }
  };

  const playFallbackBeep = () => {
    // Fallback beep using Web Audio API
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
      console.log('No audio support available');
    }
  };

  const handleVote = (candidateId) => {
    setSelectedCandidate(candidateId);
    setGlowingBulb(candidateId);
    
    // Play beep sound
    try {
      playBeepSound();
    } catch (error) {
      console.log('Audio not supported');
    }
    
    // Show success after a short delay
    setTimeout(() => {
      setShowSuccess(true);
    }, 1000);
  };

  const handleRepeat = () => {
    setShowSuccess(false);
    setSelectedCandidate(null);
    setGlowingBulb(null);
  };

  if (!locationData || !theme) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  // Success Screen - Mobile Responsive
  if (showSuccess) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: window.innerWidth <= 480 ? '20px' : '0'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: window.innerWidth <= 480 ? '15px' : '20px',
          padding: window.innerWidth <= 480 ? '30px 20px' : '40px',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          maxWidth: window.innerWidth <= 480 ? '90%' : '400px',
          width: '100%'
        }}>
          <div style={{ 
            fontSize: window.innerWidth <= 480 ? '3rem' : '4rem', 
            marginBottom: window.innerWidth <= 480 ? '15px' : '20px' 
          }}>✅</div>
          <h2 style={{ 
            color: '#10B981', 
            fontSize: window.innerWidth <= 480 ? '1.5rem' : '2rem', 
            marginBottom: window.innerWidth <= 480 ? '10px' : '15px',
            fontWeight: 'bold'
          }}>
            Voting Successful!
          </h2>
          <p style={{ 
            color: '#666', 
            fontSize: window.innerWidth <= 480 ? '1rem' : '1.1rem', 
            marginBottom: window.innerWidth <= 480 ? '25px' : '30px',
            lineHeight: '1.5'
          }}>
            Your vote has been recorded successfully.
          </p>
          <button
            onClick={handleRepeat}
            style={{
              backgroundColor: '#059669',
              color: 'white',
              border: 'none',
              padding: window.innerWidth <= 480 ? '12px 25px' : '15px 30px',
              borderRadius: window.innerWidth <= 480 ? '8px' : '10px',
              fontSize: window.innerWidth <= 480 ? '14px' : '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
              minWidth: window.innerWidth <= 480 ? '120px' : '140px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#047857'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#059669'}
          >
            Vote Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      padding: window.innerWidth <= 768 ? '10px' : '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto'
      }}>
        {/* Level Tabs - Mobile Responsive */}
        <div style={{
          display: 'flex',
          marginBottom: '0',
          gap: window.innerWidth <= 480 ? '5px' : '10px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => handleTabClick('Ward')}
            style={{
              backgroundColor: currentLevel === 'Ward' ? '#9CA3AF' : '#D1D5DB',
              color: 'white',
              padding: window.innerWidth <= 480 ? '8px 20px' : '10px 30px',
              borderRadius: '20px',
              fontSize: window.innerWidth <= 480 ? '12px' : '14px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              minWidth: window.innerWidth <= 480 ? '70px' : '80px',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            Ward
          </button>
          <button
            onClick={() => handleTabClick('Block')}
            style={{
              backgroundColor: currentLevel === 'Block' ? '#EC4899' : '#D1D5DB',
              color: 'white',
              padding: window.innerWidth <= 480 ? '8px 20px' : '10px 30px',
              borderRadius: '20px',
              fontSize: window.innerWidth <= 480 ? '12px' : '14px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              minWidth: window.innerWidth <= 480 ? '70px' : '80px',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            Block
          </button>
          <button
            onClick={() => handleTabClick('District')}
            style={{
              backgroundColor: currentLevel === 'District' ? '#0891B2' : '#D1D5DB',
              color: 'white',
              padding: window.innerWidth <= 480 ? '8px 20px' : '10px 30px',
              borderRadius: '20px',
              fontSize: window.innerWidth <= 480 ? '12px' : '14px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              minWidth: window.innerWidth <= 480 ? '70px' : '80px',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            District
          </button>
        </div>

        {/* EVM Container - Mobile Responsive */}
        <div style={{
          backgroundColor: theme.containerColor,
          border: `3px solid ${theme.borderColor}`,
          borderRadius: window.innerWidth <= 480 ? '15px' : '20px',
          padding: window.innerWidth <= 480 ? '15px' : '20px',
          marginTop: '10px'
        }}>
          {/* Header - Mobile Responsive */}
          <div style={{
            backgroundColor: 'white',
            padding: window.innerWidth <= 480 ? '12px' : '15px',
            borderRadius: window.innerWidth <= 480 ? '8px' : '10px',
            marginBottom: window.innerWidth <= 480 ? '15px' : '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: window.innerWidth <= 480 ? '8px' : '10px' }}>
              <span style={{ 
                color: '#10B981', 
                fontSize: window.innerWidth <= 480 ? '12px' : '14px', 
                fontWeight: 'bold' 
              }}>Ready</span>
              <div style={{ 
                width: window.innerWidth <= 480 ? '6px' : '8px', 
                height: window.innerWidth <= 480 ? '6px' : '8px', 
                backgroundColor: '#10B981', 
                borderRadius: '50%' 
              }}></div>
            </div>
            <div style={{ 
              fontSize: window.innerWidth <= 480 ? '14px' : '16px', 
              fontWeight: 'bold', 
              color: '#333' 
            }}>
              {evmLocations[currentLocationId]?.locationName || 'Location'} - Ballot Unit {currentLocationId}
            </div>
          </div>

          {/* Candidate Table with Proper Borders */}
          <div style={{
            border: '2px solid #D1D5DB',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: 'white'
          }}>
            {locationData.candidates.map((candidate, index) => (
              <div key={candidate.id} style={{
                display: 'grid',
                gridTemplateColumns: '50px 1fr 40px 80px',
                alignItems: 'center',
                padding: window.innerWidth <= 480 ? '8px' : '12px',
                borderBottom: index < locationData.candidates.length - 1 ? '1px solid #E5E7EB' : 'none',
                backgroundColor: 'white',
                minHeight: window.innerWidth <= 480 ? '50px' : '55px',
                gap: window.innerWidth <= 480 ? '8px' : '12px'
              }}>
                {/* Row Number with Border */}
                <div style={{
                  fontSize: window.innerWidth <= 480 ? '14px' : '16px',
                  color: '#1E40AF',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  borderRight: '1px solid #E5E7EB',
                  paddingRight: '8px',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {candidate.id}
                </div>

                {/* Candidate Name and Symbol Combined with Border */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingLeft: window.innerWidth <= 480 ? '8px' : '12px',
                  paddingRight: window.innerWidth <= 480 ? '8px' : '12px',
                  borderRight: '1px solid #E5E7EB',
                  height: '100%',
                  minWidth: 0 // Allow flex item to shrink
                }}>
                  <div style={{
                    fontSize: window.innerWidth <= 480 ? '14px' : '16px',
                    color: '#333',
                    fontWeight: candidate.name ? 'bold' : 'normal',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    flex: 1,
                    marginRight: candidate.symbol ? '8px' : '0'
                  }}>
                    {candidate.name}
                  </div>
                  <div style={{
                    fontSize: window.innerWidth <= 480 ? '18px' : '22px',
                    flexShrink: 0
                  }}>
                    {candidate.symbol}
                  </div>
                </div>

                {/* Red Bulb with Border */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRight: '1px solid #E5E7EB',
                  paddingRight: '8px',
                  height: '100%'
                }}>
                  <div style={{
                    width: window.innerWidth <= 480 ? '16px' : '20px',
                    height: window.innerWidth <= 480 ? '16px' : '20px',
                    backgroundColor: glowingBulb === candidate.id ? '#FF0000' : '#8B5A2B',
                    borderRadius: '50%',
                    boxShadow: glowingBulb === candidate.id ? '0 0 15px #FF0000, 0 0 30px #FF0000' : 'none',
                    transition: 'all 0.3s ease'
                  }}></div>
                </div>

                {/* Vote Button */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%'
                }}>
                  <button
                    onClick={candidate.name ? () => handleVote(candidate.id) : undefined}
                    style={{
                      backgroundColor: '#1E40AF',
                      border: 'none',
                      padding: window.innerWidth <= 480 ? '6px 12px' : '8px 16px',
                      borderRadius: window.innerWidth <= 480 ? '6px' : '8px',
                      cursor: candidate.name ? 'pointer' : 'default',
                      minWidth: window.innerWidth <= 480 ? '45px' : '55px',
                      minHeight: window.innerWidth <= 480 ? '28px' : '32px',
                      touchAction: 'manipulation',
                      WebkitTapHighlightColor: 'transparent'
                    }}
                    onMouseOver={(e) => {
                      if (candidate.name) {
                        e.target.style.backgroundColor = '#1E3A8A';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (candidate.name) {
                        e.target.style.backgroundColor = '#1E40AF';
                      }
                    }}
                  >
                    {/* Empty button - no text */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Button - Mobile Responsive */}
        <div style={{ textAlign: 'center', marginTop: window.innerWidth <= 480 ? '15px' : '20px' }}>
          <button style={{
            backgroundColor: '#059669',
            color: 'white',
            border: 'none',
            padding: window.innerWidth <= 480 ? '10px 20px' : '12px 30px',
            borderRadius: window.innerWidth <= 480 ? '15px' : '20px',
            fontSize: window.innerWidth <= 480 ? '12px' : '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent',
            maxWidth: '100%',
            wordWrap: 'break-word'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#047857'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#059669'}
          >
            Share Demo Voting Machine
          </button>
        </div>
      </div>
    </div>
  );
};

export default EVMPage;
