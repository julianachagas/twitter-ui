import React from 'react';
import { Header } from '../components/Header';
import { useParams } from 'react-router-dom';
import { TweetProps } from '../data';
import { Tweet } from '../components/Tweet';
import { StyledForm } from '../components/styles/Form.styled';
import { StyledButton } from '../components/styles/Button.styled';
import { NotFound } from './NotFound';
import { StyledSeparator } from '../components/styles/Separator.styled';
import { useGlobalContext } from '../context/GlobalProvider';

export const Status = () => {
  const { id } = useParams();
  const { tweets, setTweets } = useGlobalContext();
  const [currentTweet, setCurrentTweet] = React.useState<TweetProps | null>(
    null,
  );
  const [reply, setReply] = React.useState('');
  const [replies, setReplies] = React.useState<TweetProps[]>([]);

  function updateTweet(newReply: TweetProps) {
    if (id) {
      const updatedTweets = tweets.map(tweet => {
        if (tweet.id === +id) {
          return { ...tweet, repliesTweets: [newReply, ...replies] };
        }
        return tweet;
      });
      setTweets(updatedTweets);
    }
  }

  function createNewReply() {
    const newReply: TweetProps = {
      id: Date.now(),
      picture: 'https://xsgames.co/randomusers/assets/avatars/female/21.jpg',
      name: 'Lizzie Bennet',
      username: '@lizzie_bennet',
      content: reply,
      likes: 0,
      retweets: 0,
      replies: 0,
    };
    updateTweet(newReply);
    setReply('');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    createNewReply();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      createNewReply();
    }
  }

  React.useEffect(() => {
    if (id) {
      const tweet = tweets.find(tweet => tweet.id === +id);
      if (tweet) {
        setCurrentTweet(tweet);
        tweet.repliesTweets && setReplies(tweet.repliesTweets);
      } else {
        setCurrentTweet(null);
      }
    }
  }, [tweets]);

  if (!currentTweet) return null;
  return (
    <main>
      <Header title="Tweet" />
      <Tweet {...currentTweet} />
      <StyledSeparator />
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
            placeholder="Tweet your reply"
            value={reply}
            onChange={e => setReply(e.target.value)}
            onKeyDown={handleKeyDown}
          ></textarea>
        </div>
        <StyledButton type="submit" disabled={reply === '' ? true : false}>
          Reply
        </StyledButton>
      </StyledForm>

      {replies.map(reply => (
        <Tweet {...reply} key={reply.id} />
      ))}
    </main>
  );
};
