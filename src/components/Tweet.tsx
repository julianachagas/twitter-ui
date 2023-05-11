import { TweetProps } from '../data';
import { StyledTweet } from './styles/Tweet.styled';
import { ChatCircle, Repeat, Heart } from 'phosphor-react';

export const Tweet = (props: TweetProps) => {
  return (
    <StyledTweet>
      <img src={props.picture} alt={props.name} />
      <div>
        <span className="user">{props.name}</span>
        <span>{props.username}</span>
        <p>{props.content}</p>
        <div className="stats">
          <button>
            <ChatCircle size={24} />
            {props.replies}
          </button>
          <button>
            <Repeat size={24} />
            {props.retweets}
          </button>
          <button>
            <Heart size={24} />
            {props.likes}
          </button>
        </div>
      </div>
    </StyledTweet>
  );
};
