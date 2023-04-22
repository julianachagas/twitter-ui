export interface TweetProps {
  id: number;
  picture: string;
  username: string;
  name: string;
  content: string;
  replies: number;
  retweets: number;
  likes: number;
  repliesTweets?: TweetProps[];
}

export const data: TweetProps[] = [
  {
    id: 1,
    picture: 'https://xsgames.co/randomusers/assets/avatars/male/58.jpg',
    username: '@harry',
    name: 'Harry',
    content:
      "Working hard is important, but there's something that matters even more: believing in yourself.",
    replies: 180,
    retweets: 98,
    likes: 258,
    repliesTweets: [
      {
        id: 11,
        picture: 'https://xsgames.co/randomusers/assets/avatars/female/5.jpg',
        username: '@anneshirley',
        name: 'Anne Shirley',
        content: 'Well said!',
        replies: 6,
        retweets: 8,
        likes: 78,
      },
    ],
  },
  {
    id: 2,
    picture: 'https://xsgames.co/randomusers/assets/avatars/female/5.jpg',
    username: '@anneshirley',
    name: 'Anne Shirley',
    content:
      "I went looking for my dreams outside of myself and discovered, it's not what the world holds for you, it's what you bring to it.",
    replies: 28,
    retweets: 14,
    likes: 36,
    repliesTweets: [
      {
        id: 21,
        picture: 'https://xsgames.co/randomusers/assets/avatars/male/58.jpg',
        username: '@harry',
        name: 'Harry',
        content: 'Great quote!',
        replies: 5,
        retweets: 11,
        likes: 53,
      },
      {
        id: 22,
        picture: 'https://xsgames.co/randomusers/assets/avatars/female/69.jpg',
        username: '@matilda',
        name: 'Matilda',
        content: 'I love this, Anne!',
        replies: 13,
        retweets: 18,
        likes: 83,
      },
    ],
  },
  {
    id: 3,
    picture: 'https://xsgames.co/randomusers/assets/avatars/male/51.jpg',
    username: '@mr_darcy',
    name: 'Darcy',
    content:
      'My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.',
    replies: 50,
    retweets: 126,
    likes: 89,
  },

  {
    id: 4,
    picture: 'https://xsgames.co/randomusers/assets/avatars/male/19.jpg',
    username: '@gilbertblythe',
    name: 'Gilbert Blythe',
    content: "Life's too short to hold grudges anyway.",
    replies: 9,
    retweets: 17,
    likes: 106,
    repliesTweets: [
      {
        id: 41,
        picture: 'https://xsgames.co/randomusers/assets/avatars/female/5.jpg',
        username: '@anneshirley',
        name: 'Anne Shirley',
        content: 'Well said, Gilbert!',
        replies: 23,
        retweets: 9,
        likes: 63,
      },
    ],
  },
  {
    id: 5,
    picture: 'https://xsgames.co/randomusers/assets/avatars/female/69.jpg',
    username: '@matilda',
    name: 'Matilda',
    content:
      "Never do anything by halves if you want to get away with it. Be outrageous. Go the whole hog. Make sure everything you do is so completely crazy it's unbelievable.",
    replies: 121,
    retweets: 15,
    likes: 89,
    repliesTweets: [
      {
        id: 51,
        picture: 'https://xsgames.co/randomusers/assets/avatars/female/5.jpg',
        username: '@anneshirley',
        name: 'Anne Shirley',
        content: 'Love this!',
        replies: 18,
        retweets: 6,
        likes: 91,
      },
      {
        id: 52,
        picture: 'https://xsgames.co/randomusers/assets/avatars/female/33.jpg',
        username: '@amy_march',
        name: 'Amy March',
        content: 'Well said!',
        replies: 8,
        retweets: 5,
        likes: 21,
      },
      {
        id: 53,
        picture: 'https://xsgames.co/randomusers/assets/avatars/male/58.jpg',
        username: '@harry',
        name: 'Harry',
        content: 'Amazing!',
        replies: 15,
        retweets: 9,
        likes: 89,
      },
    ],
  },
  {
    id: 6,
    picture: 'https://xsgames.co/randomusers/assets/avatars/female/33.jpg',
    username: '@amy_march',
    name: 'Amy March',
    content:
      'I am not afraid of storms, for I am learning how to sail my ship.',
    replies: 33,
    retweets: 11,
    likes: 193,
  },
];
