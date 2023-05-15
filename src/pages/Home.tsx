import React from 'react';
import { Header } from '../components/Header';
import { StyledForm } from '../components/styles/Form.styled';
import { StyledButton } from '../components/styles/Button.styled';
import { TweetProps } from '../data';
import { Tweet } from '../components/Tweet';
import { Link } from 'react-router-dom';
import { StyledSeparator } from '../components/styles/Separator.styled';
import { useGlobalContext } from '../context/GlobalProvider';

export const Home = () => {
  const [tweet, setTweet] = React.useState('');
  const { tweets, setTweets } = useGlobalContext();

  function createNewTweet() {
    const newTweet: TweetProps = {
      id: Date.now(),
      picture: 'https://xsgames.co/randomusers/assets/avatars/female/21.jpg',
      name: 'Lizzie Bennet',
      username: '@lizzie_bennet',
      content: tweet,
      likes: 0,
      retweets: 0,
      replies: 0,
      repliesTweets: [],
    };
    setTweets([newTweet, ...tweets]);
    setTweet('');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    createNewTweet();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      createNewTweet();
    }
  }

  return (
    <main>
      <Header title="Home" themeBtn />
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <img
            src="https://xsgames.co/randomusers/assets/avatars/female/21.jpg"
            alt=""
          />
          <label htmlFor="tweet" className="visually-hidden">
            What's happening?
          </label>
          <textarea
            name="tweet"
            id="tweet"
            placeholder="What's happening?"
            value={tweet}
            onChange={e => setTweet(e.target.value)}
            onKeyDown={handleKeyDown}
          ></textarea>
        </div>
        <StyledButton type="submit" disabled={tweet === '' ? true : false}>
          Tweet
        </StyledButton>
      </StyledForm>
      <StyledSeparator />
      {tweets.map(tweet => (
        <Link to={`/status/${tweet.id}`} className="tweet-link" key={tweet.id}>
          <Tweet {...tweet} />
        </Link>
      ))}
    </main>
  );
};
