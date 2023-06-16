import useTimer from 'src/hooks/useTimer';
import styles from './Timer.module.scss';

export default function Timer({ content }) {
  const timerString = useTimer();
  return (
    <span>{timerString}</span>
  )
}
