import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const Friend = ({ id, name, avatar, isOnline }) => {
  return (
    <li className={css.item} key={id}>
      <span
        className={
          isOnline
            ? `${css.status} ${css.online}`
            : `${css.status} ${css.offline}`
        }
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
