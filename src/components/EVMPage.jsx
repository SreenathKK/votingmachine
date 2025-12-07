import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getWardData, getLevelTheme } from '../data/evmData';
import { Share2, X, Copy, Check, Facebook, Twitter, Send, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const EVMPage = () => {
  const { panchayatId, wardParam } = useParams();
  
  // Parse ward number from parameter (handles "ward=9" or just "9")
  const wardNo = wardParam ? (wardParam.startsWith('ward=') ? wardParam.split('=')[1] : wardParam) : '1';

  const [currentLevel, setCurrentLevel] = useState('Ward');
  const [locationData, setLocationData] = useState(null);
  const [theme, setTheme] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [glowingBulb, setGlowingBulb] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentLocationId, setCurrentLocationId] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const pId = panchayatId || '1';
    const wNo = wardNo || '1';
    setCurrentLocationId(`${pId}/${wNo}`);
    
    setCurrentLevel('Ward');
    updateData('Ward', pId, wNo);
  }, [panchayatId, wardNo]);

  const updateData = (level, pId = panchayatId || '1', wNo = wardNo || '1') => {
    const data = getWardData(pId, wNo);
    if (data && data.ward && data.ward[level]) {
      setLocationData(data.ward[level]);
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

  const handleShare = async () => {
    const shareData = {
      title: 'Vote For UDF',
      text: 'വോട്ട് മനുഷ്യന്റെ സ്വപ്നങ്ങളും ഭാവിയും എഴുതുന്ന ഏറ്റവും ചെറിയ രേഖയാണ്. വോട്ട് മനുഷ്യന്റെ സ്വപ്നങ്ങളും ഭാവിയും എഴുതുന്ന ഏറ്റവും ചെറിയ രേഖയാണ്.',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
        setShowShareModal(true);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ShareModal = () => {
    const currentUrl = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('വോട്ട് മനുഷ്യന്റെ സ്വപ്നങ്ങളും ഭാവിയും എഴുതുന്ന ഏറ്റവും ചെറിയ രേഖയാണ്. അത് ചെറുതായിരിക്കാം… പക്ഷേ അതിന്റെ ശക്തി ഒരു തലമുറയുടെ ദിശ മാറ്റാൻ കഴിയും.');

    const shareLinks = [
      {
        name: 'WhatsApp',
        icon: <MessageCircle size={24} />,
        url: `https://wa.me/?text=${text}%20${currentUrl}`,
        color: '#25D366'
      },
      {
        name: 'Facebook',
        icon: <Facebook size={24} />,
        url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
        color: '#1877F2'
      },
      {
        name: 'Twitter',
        icon: <Twitter size={24} />,
        url: `https://twitter.com/intent/tweet?text=${text}&url=${currentUrl}`,
        color: '#1DA1F2'
      },
      {
        name: 'Telegram',
        icon: <Send size={24} />,
        url: `https://t.me/share/url?url=${currentUrl}&text=${text}`,
        color: '#0088cc'
      }
    ];

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }} onClick={() => setShowShareModal(false)}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '25px',
          width: '100%',
          maxWidth: '400px',
          position: 'relative'
        }} onClick={e => e.stopPropagation()}>
          <button 
            onClick={() => setShowShareModal(false)}
            style={{
              position: 'absolute',
              right: '15px',
              top: '15px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: '#666'
            }}
          >
            <X size={24} />
          </button>

          <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '1.25rem', fontWeight: 'bold' }}>
            Share via
          </h3>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '15px',
            marginBottom: '25px'
          }}>
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: '#333',
                  gap: '8px'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: link.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  {link.icon}
                </div>
                <span style={{ fontSize: '12px' }}>{link.name}</span>
              </a>
            ))}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            backgroundColor: '#f3f4f6',
            borderRadius: '10px',
            border: '1px solid #e5e7eb'
          }}>
            <input 
              type="text" 
              value={window.location.href} 
              readOnly
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                outline: 'none',
                color: '#666',
                fontSize: '14px'
              }}
            />
            <button
              onClick={copyToClipboard}
              style={{
                border: 'none',
                background: 'white',
                padding: '8px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: copied ? '#10B981' : '#666',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
        </div>
      </div>
    );
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
    const votedCandidate = locationData?.candidates?.find(c => c.id === selectedCandidate);

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
          padding: '0', // Removing padding to let the border take over
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          maxWidth: window.innerWidth <= 480 ? '90%' : '400px',
          width: '100%',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* UDF Tricolor Border Effect */}
          <div style={{
            background: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)',
            padding: '5px',
            borderRadius: window.innerWidth <= 480 ? '15px' : '20px',
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: window.innerWidth <= 480 ? '12px' : '17px',
              padding: window.innerWidth <= 480 ? '30px 20px' : '40px',
            }}>
              
              <div style={{ 
                fontSize: window.innerWidth <= 480 ? '3rem' : '4rem', 
                marginBottom: '10px' 
              }}>✅</div>
              
              <h2 style={{ 
                color: '#10B981', 
                fontSize: window.innerWidth <= 480 ? '1.5rem' : '2rem', 
                marginBottom: '5px',
                fontWeight: 'bold'
              }}>
                Vote Recorded!
              </h2>

              {votedCandidate && (
                <div style={{
                  margin: '20px 0',
                  padding: '0',
                  background: 'linear-gradient(180deg, rgba(255, 153, 51, 0.1) 0%, rgba(255, 255, 255, 1) 45%, rgba(255, 255, 255, 1) 55%, rgba(19, 136, 8, 0.1) 100%)',
                  borderRadius: '15px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  border: '1px solid #f0f0f0'
                }}>
                  {/* Tricolor Top Bar */}
                  <div style={{
                    height: '8px',
                    background: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)'
                  }}></div>

                  <div style={{ padding: '25px' }}>
                    <div style={{ 
                      fontSize: '1.2rem', 
                      color: '#64748b', 
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: '600'
                    }}>
                      You voted for
                    </div>
                    <div style={{ 
                      fontSize: '2rem', 
                      fontWeight: '800', 
                      color: '#1e293b',
                      marginBottom: '20px'
                    }}>
                      {votedCandidate.name}
                    </div>
                    
                    {votedCandidate.image ? (
                      <div style={{
                        width: '140px',
                        height: '140px',
                        margin: '0 auto 10px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid white',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                      }}>
                        <img 
                          src={votedCandidate.image} 
                          alt={votedCandidate.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    ) : (
                      <div style={{ 
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                        {votedCandidate.symbolImage ? (
                          <img 
                            src={votedCandidate.symbolImage} 
                            alt="symbol" 
                            style={{
                              width: '100px',
                              height: '100px',
                              objectFit: 'contain',
                              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                            }} 
                          />
                        ) : (
                          <div style={{ 
                            fontSize: '5rem',
                            lineHeight: '1',
                            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                          }}>
                            {votedCandidate.symbol}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <p style={{ 
                color: '#475569', 
                fontSize: window.innerWidth <= 480 ? '1rem' : '1.1rem', 
                marginBottom: '25px',
                lineHeight: '1.6',
                fontStyle: 'italic'
              }}>
                "Thank you for strengthening democracy! Your vote has been successfully cast."
              </p>

              <button
                onClick={handleRepeat}
                style={{
                  background: 'linear-gradient(to right, #FF9933, #138808)', // Tricolor gradient button
                  color: 'white',
                  border: 'none',
                  padding: window.innerWidth <= 480 ? '12px 25px' : '15px 30px',
                  borderRadius: window.innerWidth <= 480 ? '8px' : '10px',
                  fontSize: window.innerWidth <= 480 ? '14px' : '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  minWidth: window.innerWidth <= 480 ? '120px' : '140px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
                onMouseOver={(e) => e.target.style.opacity = '0.9'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                Vote Again
              </button>
            </div>
          </div>
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
              backgroundColor: currentLevel === 'Ward' ? '#FF9933' : '#FFCC80', // Saffron Active / Light Saffron Inactive
              color: currentLevel === 'Ward' ? 'white' : '#333', // White text for active, Dark for inactive light color
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
              backgroundColor: currentLevel === 'Block' ? '#F3F4F6' : '#E5E7EB', // White/Gray Active / Darker Gray Inactive
              color: '#333', // Always dark text for Block
              padding: window.innerWidth <= 480 ? '8px 20px' : '10px 30px',
              borderRadius: '20px',
              fontSize: window.innerWidth <= 480 ? '12px' : '14px',
              fontWeight: 'bold',
              border: currentLevel === 'Block' ? '1px solid #D1D5DB' : '1px solid transparent',
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
              backgroundColor: currentLevel === 'District' ? '#138808' : '#86EFAC', // Green Active / Light Green Inactive
              color: currentLevel === 'District' ? 'white' : '#064E3B', // White text for active, Dark Green for inactive
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
              Ballot Unit {(() => {
                const data = getWardData(panchayatId || '1', wardNo || '1');
                return data?.ward?.ballotUnit || '1';
              })()}
            </div>
          </div>

          {/* Candidate Table - Clean Table Design */}
          <table style={{
            width: '100%',
            border: '4px solid #D1D5DB',
            borderCollapse: 'collapse',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'white'
          }}>
            <tbody>
              {locationData.candidates.map((candidate, index) => (
                <tr key={candidate.id} style={{
                  borderBottom: index < locationData.candidates.length - 1 ? '6px solid #E5E7EB' : 'none'
                }}>
                  {/* Row Number */}
                  <td style={{
                    width: window.innerWidth <= 480 ? '40px' : '60px', // Reduced width
                    padding: window.innerWidth <= 480 ? '8px 4px' : '16px 12px', // Reduced padding
                    borderRight: '6px solid #E5E7EB',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    fontSize: window.innerWidth <= 480 ? '14px' : '18px', // Reduced font size
                    color: '#374151',
                    fontWeight: 'bold'
                  }}>
                    {candidate.id}
                  </td>

                  {/* Candidate Name and Symbol */}
                  <td style={{
                    padding: window.innerWidth <= 480 ? '8px 4px' : '16px', // Reduced padding
                    borderRight: '6px solid #E5E7EB',
                    verticalAlign: 'middle'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%'
                    }}>
                      <div style={{
                        fontSize: window.innerWidth <= 480 ? '13px' : '18px', // Reduced font size
                        color: '#111827',
                        fontWeight: candidate.name ? '600' : 'normal',
                        flex: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {candidate.name}
                      </div>
                      <div style={{
                        fontSize: window.innerWidth <= 480 ? '20px' : '24px',
                        marginLeft: '8px',
                        flexShrink: 0
                      }}>
                        {candidate.symbolImage ? (
                          <img 
                            src={candidate.symbolImage} 
                            alt="symbol" 
                            style={{
                              width: window.innerWidth <= 480 ? '30px' : '40px',
                              height: window.innerWidth <= 480 ? '30px' : '40px',
                              objectFit: 'contain'
                            }} 
                          />
                        ) : (
                          candidate.symbol
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Red Bulb and Vote Button in Same Column */}
                  <td style={{
                    width: window.innerWidth <= 480 ? '70px' : '100px', // Reduced width
                    padding: window.innerWidth <= 480 ? '8px' : '16px', // Reduced padding
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: window.innerWidth <= 480 ? '8px' : '12px'
                    }}>
                      {/* Red Bulb */}
                      <div style={{
                        width: window.innerWidth <= 480 ? '16px' : '20px',
                        height: window.innerWidth <= 480 ? '16px' : '20px',
                        backgroundColor: glowingBulb === candidate.id ? '#FF0000' : '#8B5A2B',
                        borderRadius: '50%',
                        boxShadow: glowingBulb === candidate.id ? '0 0 15px #FF0000, 0 0 30px #FF0000' : 'none',
                        transition: 'all 0.3s ease',
                        flexShrink: 0
                      }}></div>

                      {/* Vote Button */}
                      <button
                        onClick={candidate.name ? () => handleVote(candidate.id) : undefined}
                        style={{
                          backgroundColor: '#1E40AF',
                          border: 'none',
                          padding: window.innerWidth <= 480 ? '8px 12px' : '10px 16px',
                          borderRadius: window.innerWidth <= 480 ? '6px' : '8px',
                          cursor: candidate.name ? 'pointer' : 'default',
                          minWidth: window.innerWidth <= 480 ? '45px' : '55px',
                          minHeight: window.innerWidth <= 480 ? '30px' : '35px',
                          touchAction: 'manipulation',
                          WebkitTapHighlightColor: 'transparent',
                          flexShrink: 0
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Share Button - Mobile Responsive */}
        <div style={{ textAlign: 'center', marginTop: window.innerWidth <= 480 ? '15px' : '20px' }}>
          <button 
            onClick={handleShare}
            style={{
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
              wordWrap: 'break-word',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#047857'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#059669'}
          >
            <Share2 size={16} />
            Share Demo Voting Machine
          </button>
        </div>
      </div>

      {showShareModal && <ShareModal />}
      {/* Dynamic Meta Tags */}
      <Helmet>
        <title>{selectedCandidate ? `Voted for ${locationData?.candidates.find(c => c.id === selectedCandidate)?.name}` : (locationData?.candidates[0]?.name ? `Vote for ${locationData.candidates[0].name}` : 'EVM Voting Machine')}</title>
        <meta property="og:title" content={selectedCandidate ? `Voted for ${locationData?.candidates.find(c => c.id === selectedCandidate)?.name}` : (locationData?.candidates[0]?.name ? `Vote for ${locationData.candidates[0].name}` : 'EVM Voting Machine')} />
        <meta property="og:description" content={`Vote for ${locationData?.candidates[0]?.name || 'Candidate'} in ${locationData?.name || 'Ward'}, ${locationData?.panchayatName || 'Panchayat'}`} />
        <meta property="og:image" content={selectedCandidate ? (locationData?.candidates.find(c => c.id === selectedCandidate)?.image || locationData?.candidates.find(c => c.id === selectedCandidate)?.symbolImage) : (locationData?.candidates[0]?.image || locationData?.candidates[0]?.symbolImage || '/vite.svg')} />
      </Helmet>

      {/* Watermark */}
      <div style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        opacity: 0.1,
        pointerEvents: 'none',
        fontSize: '0.6rem',
        color: '#000',
        zIndex: 9999,
        fontFamily: 'Arial, sans-serif'
      }}>
        Sreenath
      </div>
    </div>
  );
};

export default EVMPage;
