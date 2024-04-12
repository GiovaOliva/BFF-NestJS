export interface Heroe {
    
    id: string,
    name: string,
    description: string,
    modified: Date,
    thumbnail_path: string,
    thumbnail_extension: string,
    resourceURI: string,
    teamColor: string,

}

export interface MarvelHeroe {
    id: string,
    name: string,
    description: string,
    modified: Date,
    thumbnail: {
        path: string,
        extension: string
    }
    resourceURI: string
}


/*
{
  id: 1011334,
  name: '3-D Man',
  description: '',
  modified: '2014-04-29T14:18:17-0400',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
    extension: 'jpg'
  },
  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
  comics: {
    available: 12,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/comics',
    items: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    returned: 12
  },
  series: {
    available: 3,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/series',
    items: [ [Object], [Object], [Object] ],
    returned: 3
  },
  stories: {
    available: 21,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/stories',
    items: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object]
    ],
    returned: 20
  },
  events: {
    available: 1,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/events',
    items: [ [Object] ],
    returned: 1
  },
  urls: [
    {
      type: 'detail',
      url: 'http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=4e25473721ec4cf62e3fb5e5d817bf7d'
    },
    {
      type: 'wiki',
      url: 'http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=4e25473721ec4cf62e3fb5e5d817bf7d'
    },
    {
      type: 'comiclink',
      url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=4e25473721ec4cf62e3fb5e5d817bf7d'
    }
  ]
}
*/