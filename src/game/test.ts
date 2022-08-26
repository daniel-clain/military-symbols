({
  game: {
    players: [
      {
        name: 'player 1',
        districts: [
          {
            name: 'district a'
          },
          {
            name: 'district b'
          },
          {
            name: 'district c'
          }
        ]
      },
      {
        name: 'player 2',
        districts: [
          {
            name: 'district x'
          },
          {
            name: 'district y'
          },
          {
            name: 'district z'
          }
        ]
      }
    ]
  }
})

/* 

const corps: Corps = {
  formationType: 'Corps',
  xs: 3,
  commandingOfficers: [{name: 'bob', rankName: 'Lieutenant General', stars: 3, }],
  divisions: [
    {
      xs: 2,
      formationType: 'Division',
      madeUpOf: [] as [Brigade, Brigade Brigade],
      commandingOfficers: {},
      commandingOfficer: {
        name: 'fred',
        rankName: 'Major General',
        stars: 2
      }
    },
    {
      xs: 2,
      formationType: 'Corps',
      regiments: [],
      brigades: [],
      commandingOfficers: [{
        name: 'greg',
        rankName: 'Major General',
        stars: 2
      }]
    }
  ]
  
}

console.log('corps :>> ', corps); */