var data = [{id: '0.0', name: 'SDGs', myData: 'Sustainable Development Goals', },
  {id: '1.0', parent: '0.0', name: 'SDG 1', myData: 'End poverty', color: '#E5243B', tooltipIncluded: true, },
  {parent: '1.0', name: '1.4.2. Land Tenure', myData: '1.4.2. Land Tenure', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '1.0', name: '1.5.1. Disasters: persons affected', myData: '1.5.1. Disasters: persons affected', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '1.0', name: '1.5.2. Disasters: economic loss', myData: '1.5.2. Disasters: economic loss', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '1.0', name: '1.5.3. Disaster risk reduction strategies', myData: '1.5.3. Disaster risk reduction strategies', color: '#d0d1d1', tooltipIncluded: true, value: 1, },
  {parent: '1.0', name: '1.5.4. Disaster risk reduction strategies<br> for local government', myData: '1.5.4. Disaster risk reduction strategies for local government', color: '#919293', tooltipIncluded: true, value: 1, },
  {id: '2.0', parent: '0.0', name: 'SDG 2', myData: 'Food security', color: '#DDA63A', tooltipIncluded: true, },
  {parent: '2.0', name: '2.4.1. Sustainable agricultural practices', myData: '2.4.1. Sustainable agricultural practices', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '2.0', name: '2.5.1. Secure genetic resources for food', myData: '2.5.1. Secure genetic resources for food', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '2.0', name: '2.5.2. Local breeds for agriculture', myData: '2.5.2. Local breeds for agriculture', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {id: '3.0', parent: '0.0', name: 'SDG 3', myData: 'Health', color: '#4C9F38', tooltipIncluded: true, },
  {parent: '3.0', name: '3.9.1. Air pollution mortality', myData: '3.9.1. Air pollution mortality', color: '#d0d1d1', tooltipIncluded: true, value: 1, },
  {parent: '3.0', name: '3.9.2. Water-related mortality', myData: '3.9.2. Water-related mortality', color: '#d0d1d1', tooltipIncluded: true, value: 1, },
  {parent: '3.0', name: '3.9.3. Unintentional poisoning', myData: '3.9.3. Unintentional poisoning', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {id: '4.0', parent: '0.0', name: 'SDG 4', myData: 'Education', color: '#C5192D', tooltipIncluded: true, },
  {parent: '4.0', name: '4.7.1. Education for sustainable development', myData: '4.7.1. Education for sustainable development', color: '#919293', tooltipIncluded: true, value: 2, },
  {id: '5.0', parent: '0.0', name: 'SDG 5', myData: 'Gender', color: '#FF3A21', tooltipIncluded: true, },
  {parent: '5.0', name: '5.a.1. Women agricultural land owners', myData: '5.a.1. Women agricultural land owners', color: '#919293', tooltipIncluded: true, value: 2, },
  {id: '6.0', parent: '0.0', name: 'SDG 6', myData: 'Water', color: '#6FD3EC', tooltipIncluded: true, },
  {parent: '6.0', name: '6.1.1. Safe drinking water', myData: '6.1.1. Safe drinking water', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '6.0', name: '6.2.1. Handwashing<br> facilities', myData: '6.2.1. Handwashing facilities with soap and water', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '6.0', name: '6.3.1. Wastewater<br> treatment', myData: '6.3.1. Wastewater treatment', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '6.0', name: '6.3.2. Water quality', myData: '6.3.2. Water quality', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '6.0', name: '6.4.1. Water efficiency', myData: '6.4.1. Water efficiency', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '6.0', name: '6.4.2. Water stress', myData: '6.4.2. Water stress', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '6.0', name: '6.5.1. Water resource<br> management', myData: '6.5.1. Water resource management', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '6.0', name: '6.5.2. Water cooperation', myData: '6.5.2. Water cooperation', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '6.0', name: '6.6.1. Water related<br> ecosystems', myData: '6.6.1. Water related ecosystems', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '6.0', name: '6.a.1. Investment in water<br> and sanitation', myData: '6.a.1. Investment in water and sanitation', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '6.0', name: '6.b.1. Local water<br> management', myData: '6.b.1. Local water management', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {id: '7.0', parent: '0.0', name: 'SDG 7', myData: 'Energy', color: '#FCC30B', tooltipIncluded: true, },
  {parent: '7.0', name: '7.1.2. Reliance on clean fuels', myData: '7.1.2. Reliance on clean fuels', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '7.0', name: '7.2.1. Renewable energy', myData: '7.2.1. Renewable energy', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '7.0', name: '7.3.1. Energy intensity', myData: '7.3.1. Energy intensity', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '7.0', name: '7.a.1. Clean energy research and technology', myData: '7.a.1. Clean energy research and technology', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '7.0', name: '7.b.1. Renewable energy-generating capacity', myData: '7.b.1. Renewable energy-generating capacity', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {id: '8.0', parent: '0.0', name: 'SDG 8', myData: 'Decent work and economic growth', color: '#A21942', tooltipIncluded: true, },
  {parent: '8.0', name: '8.4.1. Material footprint', myData: '8.4.1. Material footprint', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '8.0', name: '8.4.2. Domestic material consumption', myData: '8.4.2. Domestic material consumption', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {id: '9.0', parent: '0.0', name: 'SDG 9', myData: 'Industry, Innovation and Infrastructure', color: '#FD6925', tooltipIncluded: true, },
  {parent: '9.0', name: '9.4.1. CO2 emissions', myData: '9.4.1. CO2 emissions', color: '#7898ce', tooltipIncluded: true, value: 2, },
  {id: '11.0', parent: '0.0', name: 'SDG 11', myData: 'Cities and communities', color: '#FD9D24', tooltipIncluded: true, },
  {parent: '11.0', name: '11.2.1. Access to public<br> transport', myData: '11.2.1. Access to public transport', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '11.0', name: '11.3.1. Land consumption', myData: '11.3.1. Land consumption', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '11.0', name: '11.3.2. Urban planning', myData: '11.3.2. Urban planning', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '11.0', name: '11.4.1. Investments', myData: '11.4.1. Investment in cultural and natural heritage', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '11.0', name: '11.5.1. Disasters@ persons<br> affected', myData: '11.5.1. Disasters: persons affected', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '11.0', name: '11.5.2. Disasters@<br> economic loss', myData: '11.5.2. Disasters: economic loss', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '11.0', name: '11.6.1. Urban solid<br> waste management', myData: '11.6.1. Urban solid waste management', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '11.0', name: '11.6.2. Ambient air<br> pollution', myData: '11.6.2. Ambient air pollution', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '11.0', name: '11.7.1. Public land<br> in cities', myData: '11.7.1. Public land in cities', color: '#d0d1d1', tooltipIncluded: true, value: 1, },
  {parent: '11.0', name: '11.b.1. Disaster risk<br> reduction for local<br> government', myData: '11.b.1. Disaster risk reduction for local government', color: '#d0d1d1', tooltipIncluded: true, value: 1, },
  {parent: '11.0', name: '11.b.2. Disaster risk<br> reduction strategies', myData: '11.b.2. Disaster risk reduction strategies', color: '#919293', tooltipIncluded: true, value: 1, },
  {id: '12.0', parent: '0.0', name: 'SDG 12', myData: 'Responsible lifestyles', color: '#BF8B2E', tooltipIncluded: true, },
  {parent: '12.0', name: '12.1.1. Action plans', myData: '12.1.1. Action plans for sustainability', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '12.0', name: '12.2.1. Material footprint', myData: '12.2.1. Material footprint', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '12.0', name: '12.2.2. Domestic<br> material consumption', myData: '12.2.2. Domestic material consumption', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '12.0', name: '12.3.1. (a) Global food loss index<br> and (b) food waste index', myData: '12.3.1. (a) Global food loss index and (b) food waste index', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '12.0', name: '12.4.1. Information', myData: '12.4.1. Information transmitted under chemicals and waste conventions', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '12.0', name: '12.4.2. Hazardous waste', myData: '12.4.2. Hazardous waste generation', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '12.0', name: '12.5.1. Recycling', myData: '12.5.1. Recycling', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '12.0', name: '12.6.1. Corporate<br> sustainability reporting', myData: '12.6.1. Corporate sustainability reporting', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '12.0', name: '12.7.1. Sustainable<br> public procurement', myData: '12.7.1. Sustainable public procurement', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '12.0', name: '12.8.1. Education', myData: '12.8.1. Education for sustainable lifestyles', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '12.0', name: '12.a.1. Research', myData: '12.a.1. Research for sustainable lifestyles', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '12.0', name: '12.b.1. Tourism<br> strategies', myData: '12.b.1. Sustainable tourism strategies', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '12.0', name: '12.c.1. Fossil fuel<br> subsidies', myData: '12.c.1. Fossil fuel subsidies', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {id: '13.0', parent: '0.0', name: 'SDG 13', myData: 'Climate action', color: '#3F7E44', tooltipIncluded: true, },
  {parent: '13.0', name: '13.1.1. Disasters@<br> persons affected', myData: '13.1.1. Disasters@ persons affected', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '13.0', name: '13.1.2. Disaster risk<br> reduction strategies', myData: '13.1.2. Disaster risk reduction strategies', color: '#d0d1d1', tooltipIncluded: true, value: 1, },
  {parent: '13.0', name: '13.1.3. Disaster risk<br> reduction for local government', myData: '13.1.3. Disaster risk reduction for local government', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '13.0', name: '13.2.1. Climate change<br> action plans', myData: '13.2.1. Climate change action plans', color: '#d0d1d1', tooltipIncluded: true, value: 1, },
  {parent: '13.0', name: '13.2.2. Greenhouse gas<br> emissions', myData: '13.2.2. Greenhouse gas emissions', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '13.0', name: '13.3.1. Education', myData: '13.3.1. Education for sustainable development', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '13.0', name: '13.a.1. Resources mobilized<br> for climate action', myData: '13.a.1. Resources mobilized for climate action', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '13.0', name: '13.b.1. Climate action<br> support for LDCs', myData: '13.b.1. Climate action support for LDCs', color: '#d0d1d1', tooltipIncluded: true, value: 1, },
  {id: '14.0', parent: '0.0', name: 'SDG 14', myData: 'Oceans', color: '#0A97D9', tooltipIncluded: true, },
  {parent: '14.0', name: '14.1.1. Marine pollution', myData: '14.1.1. Marine pollution and coastal eutrophication', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '14.0', name: '14.2.1. Management<br> of marine areas', myData: '14.2.1. Management of marine areas', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '14.0', name: '14.3.1. Ocean<br> acidification', myData: '14.3.1. Ocean acidification', color: '#919293', tooltipIncluded: true, value: 1, },
  {parent: '14.0', name: '14.4.1. Sustainable fish<br> stocks', myData: '14.4.1. Sustainable fish stocks', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '14.0', name: '14.5.1. Marine protected<br> areas', myData: '14.5.1. Marine protected areas', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '14.0', name: '14.6.1. Fishing regulation', myData: '14.6.1. Fishing regulation', color: '#7898ce', tooltipIncluded: true, value: 1, },
  {parent: '14.0', name: '14.7.1. Sustainable<br> fisheries in SIDS and LDCs', myData: '14.7.1. Sustainable fisheries in SIDS and LDCs', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '14.0', name: '14.a.1. Scientific<br> knowledge', myData: '14.a.1. Scientific knowledge, research capacity and transfer of marine technology', color: '#e89a6f', tooltipIncluded: true, value: 1, },
  {parent: '14.0', name: '14.c.1. Instruments<br> for conservation', myData: '14.c.1. Instruments for conservation and sustainable use of oceans and their resources', color: '#919293', tooltipIncluded: true, value: 1, },
  {id: '15.0', parent: '0.0', name: 'SDG 15', myData: 'Land and biodiversity', color: '#56C02B', tooltipIncluded: true, },
  {parent: '15.0', name: '15.1.1. Forest area', myData: '15.1.1. Forest area', color: '#e89a6f', tooltipIncluded: true, value: 1, mobSize: '15.1.1', },
  {parent: '15.0', name: '15.1.2. Protection<br> of key biodiversity areas', myData: '15.1.2. Protection of key biodiversity areas', color: '#7898ce', tooltipIncluded: true, value: 1, mobSize: '15.1.2', },
  {parent: '15.0', name: '15.2.1. Forest area', myData: '15.2.1. Forest area annual net change rate', color: '#7898ce', tooltipIncluded: true, value: 1, mobSize: '15.2.1', },
  {parent: '15.0', name: '15.3.1. Land degradation', myData: '15.3.1. Land degradation', color: '#e89a6f', tooltipIncluded: true, value: 1, mobSize: '15.3.1', },
  {parent: '15.0', name: '15.4.1. Mountain<br> protected areas', myData: '15.4.1. Mountain protected areas', color: '#7898ce', tooltipIncluded: true, value: 1, mobSize: '15.4.1', },
  {parent: '15.0', name: '15.4.2. Mountain<br> green cover', myData: '15.4.2. Mountain green cover', color: '#e9c85b', tooltipIncluded: true, value: 1, mobSize: '15.4.2', },
  {parent: '15.0', name: '15.5.1. Endangered<br> species', myData: '15.5.1. Endangered species', color: '#e89a6f', tooltipIncluded: true, value: 1, mobSize: '15.5.1', },
  {parent: '15.0', name: '15.6.1. Strategies for<br> sharing biodiversity<br> benefits', myData: '15.6.1. Strategies for sharing biodiversity benefits', color: '#7898ce', tooltipIncluded: true, value: 1, mobSize: '15.6.1', },
  {parent: '15.0', name: '15.7.1. Trade', myData: '15.7.1. Trade in poached or illicitly trafficked wildlife', color: '#919293', tooltipIncluded: true, value: 1, mobSize: '15.7.1', },
  {parent: '15.0', name: '15.8.1. Strategies for<br> preventing invasive alien<br> species', myData: '15.8.1. Strategies for preventing invasive alien species', color: '#7898ce', tooltipIncluded: true, value: 1, mobSize: '15.8.1', },
  {parent: '15.0', name: '15.9.1. Progress towards<br> Aichi Biodiversity<br> Target 2', myData: '15.9.1. Progress towards Aichi Biodiversity Target 2', color: '#d0d1d1', tooltipIncluded: true, value: 1, mobSize: '15.9.1', },
  {parent: '15.0', name: '15.a.1. Investment in<br> biodiversity and<br> ecosystems', myData: '15.a.1. Investment in biodiversity and ecosystems', color: '#7898ce', tooltipIncluded: true, value: 1, mobSize: '15.a.1', },
  {parent: '15.0', name: '15.b.1. Investment in<br> sustainable forests', myData: '15.b.1. Investment in sustainable forests', color: '#7898ce', tooltipIncluded: true, value: 1, mobSize: '15.b.1', },
  {parent: '15.0', name: '15.c.1. Protection<br> against poaching', myData: '15.c.1. Protection against poaching, trafficking and trade', color: '#919293', tooltipIncluded: true, value: 1, mobSize: '15.c.1', },
  {id: '17.0', parent: '0.0', name: 'SDG 17', myData: 'Partnerships and means of implementation', color: '#19486A', tooltipIncluded: true, },
  {parent: '17.0', name: '17.7.1. Funding for<br> environmentally sound<br> technologies', myData: '17.7.1. Funding for environmentally sound technologies', color: '#919293', tooltipIncluded: true, value: 1, mobSize: '17.7.1', },
  {parent: '17.0', name: '17.9.1. Funding for<br> capacity building', myData: '17.9.1. Funding for capacity building', color: '#7898ce', tooltipIncluded: true, value: 1, mobSize: '17.9.1', },
  {parent: '17.0', name: '17.14.1. Mechanisms<br> enhancing policy coherence', myData: '17.14.1. Mechanisms enhancing policy coherence', color: '#919293', tooltipIncluded: true, value: 1, mobSize: '17.14.1', },
  {parent: '17.0', name: '17.16.1. Progress in<br> multi-stakeholders monitoring<br> frameworks', myData: '17.16.1. Progress in multi-stakeholders monitoring frameworks', color: '#d0d1d1', tooltipIncluded: true, value: 1, mobSize: '17.16.1', },
  {parent: '17.0', name: '17.18.1. Statistical capacity for SDG', myData: '17.18.1. Statistical capacity for SDG', color: '#919293', tooltipIncluded: true, value: 1, mobSize: '17.18.1', },
  
];


Highcharts.chart('chart-sun-1', {

  chart: {
    height: '100%',
    backgroundColor: '#eff2f8'
  },

  // Let the center circle be transparent
  colors: ['transparent'].concat(Highcharts.getOptions().colors),

  title: {
    text: null
  },

  subtitle: {
    text: null
  },

  exporting: {
    enabled: false
  },

  credits: {
    enabled: false
  },

  series: [{
    type: 'sunburst',
    data: data,
    name: 'Root',
    allowDrillToNode: true,
    cursor: 'pointer',
    dataLabels: {
      // enabled: false
      style: {
        textOutline: 'none' 
    },
      format: '{point.name}',
      filter: {
        property: 'innerArcLength',
        operator: '>',
        value: 10
      },
      rotationMode: 'circular'
    },
    levels: [{
      level: 1,
      levelIsConstant: false,
      dataLabels: {
        filter: {
          property: 'outerArcLength',
          operator: '>',
          value: 64
        }
      }
    }, {
      level: 2,
      colorByPoint: true
    },
    {
      level: 3,
      levelIsConstant: false,
      dataLabels: {
        filter: {
          property: 'outerArcLength',
          operator: '>',
          value: 64
        }
      }
    }, {
      level: 4,
      colorVariation: {
        key: 'brightness',
        to: 0.5
      }
    }]

  }],

  tooltip: {
    formatter: function() {
      return '<b>' + this.point.myData + '</b>';
  }
  },

  responsive: {
    rules: [{
      condition: {
        maxWidth: 10
      },
      chartOptions: {
        
        series: [{
          dataLabels: {
            style: {
              textOutline: 'none',
              fontSize: '10px',
              
            },
           
          },
          levels: [{
            level: 1,
            levelIsConstant: false,
            dataLabels: {
              filter: {
                property: 'outerArcLength',
                operator: '>',
                value: 64
              }
            }
          }, {
            level: 2,
            
          },
          {
            level: 3,
            
            dataLabels: {
              style: {
                
                fontSize: '8px',
                
              },
            }
            
          }]
          
        }]
      },
     
    }]
  }

});