const getSampleCandidates = () => {
  const samples = [
    { name: "Ramesh", symbol: "🚲" },
    { name: "Suresh", symbol: "🦁" },
    { name: "Gita", symbol: "🌸" },
    { name: "Abdul", symbol: "🚗" },
    { name: "John", symbol: "⏰" }
  ];

  return Array(10).fill(null).map((_, i) => {
    // if (i < samples.length) {
    //   return { id: i + 1, ...samples[i] };
    // }
    return { id: i + 1, name: "", symbol: "" };
  });
};

export const evmData = {
  district: "Kasaragod",
  blocks: [
    {
      blockName: "Kanhangad",
      blockCode: "Kanhangad-05",
      panchayats: [
        {
          id: 1,
          name: "Panchayat A",
          wards: [
            {
              wardNo: 1,
              name: "North Colony",
              ballotUnit: "101",
              blockDivision: "Kanhangad-05",
              districtDivision: "Kasaragod-12",
              Ward: {
                level: "Ward",
                title: "Vote For രാഹുൽ",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              Block: {
                level: "Block",
                title: "Vote For ഷോജി",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              District: {
                level: "District",
                title: "Vote For സുനിൽ",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              }
            },
            {
              wardNo: 2,
              name: "Kurikkara",
              ballotUnit: "102",
              blockDivision: "Kanhangad-05",
              districtDivision: "Kasaragod-12",
              Ward: {
                level: "Ward",
                title: "Vote For അനിൽ",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              Block: {
                level: "Block",
                title: "Vote For രവി",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              District: {
                level: "District",
                title: "Vote For മീര",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              }
            }
          ]
        },
        {
          id: 2,
          name: "Panchayat B",
          wards: [
            {
              wardNo: 1,
              name: "Kalliyot",
              ballotUnit: "201",
              blockDivision: "Kanhangad-07",
              districtDivision: "Kasaragod-14",
              Ward: {
                level: "Ward",
                title: "Vote For പ്രിയ",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              Block: {
                level: "Block",
                title: "Vote For അജയ്",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              District: {
                level: "District",
                title: "Vote For സിന്ധു",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              }
            },
            {
              wardNo: 2,
              name: "Nileshwar North",
              ballotUnit: "202",
              blockDivision: "Kanhangad-07",
              districtDivision: "Kasaragod-14",
              Ward: {
                level: "Ward",
                title: "Vote For രേഖ",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              Block: {
                level: "Block",
                title: "Vote For മനോജ്",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              District: {
                level: "District",
                title: "Vote For ശ്രീജ",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              }
            },
            {
              wardNo: 3,
              name: "Bellur",
              ballotUnit: "203",
              blockDivision: "Kanhangad-08",
              districtDivision: "Kasaragod-15",
              Ward: {
                level: "Ward",
                title: "Vote For വിനോദ്",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              Block: {
                level: "Block",
                title: "Vote For സുമ",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              District: {
                level: "District",
                title: "Vote For രാജേഷ്",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              }
            }
          ]
        },
        {
          id: 3,
          name: "Panchayat C",
          wards: [
            {
              wardNo: 1,
              name: "Uppala Town",
              ballotUnit: "301",
              blockDivision: "Kanhangad-09",
              districtDivision: "Kasaragod-16",
              Ward: {
                level: "Ward",
                title: "Vote For ലീന",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              Block: {
                level: "Block",
                title: "Vote For സജിത്",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              District: {
                level: "District",
                title: "Vote For അനു",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              }
            },
            {
              wardNo: 2,
              name: "Chattanchal",
              ballotUnit: "302",
              blockDivision: "Kanhangad-09",
              districtDivision: "Kasaragod-16",
              Ward: {
                level: "Ward",
                title: "Vote For ബിജു",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              Block: {
                level: "Block",
                title: "Vote For രേണു",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              District: {
                level: "District",
                title: "Vote For ഹരി",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              }
            },
            {
              wardNo: 3,
              name: "Kunjathur",
              ballotUnit: "303",
              blockDivision: "Kanhangad-10",
              districtDivision: "Kasaragod-17",
              Ward: {
                level: "Ward",
                title: "Vote For മായ",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              Block: {
                level: "Block",
                title: "Vote For ജോയി",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              },
              District: {
                level: "District",
                title: "Vote For നിഷ",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "", symbol: "" },
                  { id: 3, name: "", symbol: "" },
                  { id: 4, name: "", symbol: "" },
                  { id: 5, name: "", symbol: "" },
                  { id: 6, name: "", symbol: "" },
                  { id: 7, name: "", symbol: "" },
                  { id: 8, name: "", symbol: "" },
                  { id: 9, name: "", symbol: "" },
                  { id: 10, name: "", symbol: "" }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      blockName: "Karadka",
      blockCode: "Karadka",
      panchayats: [
        {
          id: 4,
          name: "Kuttikkol",
          wards: [
            {
              wardNo: 1,
              name: "Kuttikkol",
              ballotUnit: "401",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            },
            {
              wardNo: 2,
              name: "Angadimogaru",
              ballotUnit: "402",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            },
            {
              wardNo: 3,
              name: "Kumbdaje South",
              ballotUnit: "403",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            },
            {
              wardNo: 4,
              name: "Kumbdaje North",
              ballotUnit: "404",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            },
            {
              wardNo: 5,
              name: "Mundathaje",
              ballotUnit: "405",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            },
            {
              wardNo: 6,
              name: "Kodoth",
              ballotUnit: "406",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            },
            {
              wardNo: 7,
              name: "Puchimukha",
              ballotUnit: "407",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            },
            {
              wardNo: 8,
              name: "Arampoyil",
              ballotUnit: "408",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            },
            {
              wardNo: 9,
              name: "Murikkoli",
              ballotUnit: "409",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: [
                  { id: 1, name: "ഗോപാലൻ കുമ്പച്ചിമൂല", symbol: "🖐️", image: "/candidates/gopalan.jpg", symbolImage: "/symbols/hand.png" },
                  ...Array(9).fill(null).map((_, i) => ({ id: i + 2, name: "", symbol: "" }))
                ]
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "കെ ബലരാമന്‍ നമ്പ്യാർ", symbol: "🖐️", image: "/candidates/balaraman.jpg", symbolImage: "/symbols/hand.png" },
                  ...Array(8).fill(null).map((_, i) => ({ id: i + 3, name: "", symbol: "" }))
                ]
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: [
                  { id: 1, name: "", symbol: "" },
                  { id: 2, name: "കൂക്കൾ ബാലകൃഷ്ണൻ", symbol: "", image: "/candidates/balakrishnan.jpg", symbolImage: "/symbols/shovel.png" },
                  ...Array(8).fill(null).map((_, i) => ({ id: i + 3, name: "", symbol: "" }))
                ]
              }
            },
            {
              wardNo: 10,
              name: "Chappuram",
              ballotUnit: "410",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            },
            {
              wardNo: 11,
              name: "Vidhyanagar",
              ballotUnit: "411",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            },
            {
              wardNo: 12,
              name: "Badiyadkka",
              ballotUnit: "412",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            },
            {
              wardNo: 13,
              name: "Kakkottur",
              ballotUnit: "413",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            },
            {
              wardNo: 14,
              name: "Kudlu",
              ballotUnit: "414",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            },
            {
              wardNo: 15,
              name: "Karivedakam",
              ballotUnit: "415",
              blockDivision: "Karadka",
              districtDivision: "Kasaragod",
              Ward: {
                level: "Ward",
                title: "Vote For Ward Candidate",
                candidates: getSampleCandidates()
              },
              Block: {
                level: "Block",
                title: "Vote For Block Candidate",
                candidates: getSampleCandidates()
              },
              District: {
                level: "District",
                title: "Vote For District Candidate",
                candidates: getSampleCandidates()
              }
            }
          ]
        }
      ]
    }
  ]
};

export const getWardData = (panchayatId, wardNo) => {
  for (const block of evmData.blocks) {
    for (const panchayat of block.panchayats) {
      if (panchayat.id === parseInt(panchayatId)) {
        const ward = panchayat.wards.find(w => w.wardNo === parseInt(wardNo));
        if (ward) {
          return {
            ward,
            panchayat,
            block,
            district: evmData.district
          };
        }
      }
    }
  }
  return null;
};

export const getLevelTheme = (level) => {
  const themes = {
    Ward: {
      tabColor: '#FF9933', // Saffron
      containerColor: '#FFF7ED', // Very light orange
      borderColor: '#FDBA74' // Light orange border
    },
    Block: {
      tabColor: '#F3F4F6', // Light Gray (White-ish)
      containerColor: '#FFFFFF', // White
      borderColor: '#E5E7EB' // Gray border
    },
    District: {
      tabColor: '#138808', // Green
      containerColor: '#F0FDF4', // Very light green
      borderColor: '#86EFAC' // Light green border
    }
  };
  return themes[level] || themes.Ward;
};
