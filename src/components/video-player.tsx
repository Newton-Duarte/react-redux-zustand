import ReactPlayer from 'react-player'
import { next, useCurrentLesson } from '../store/slices/player';
import { useAppDispatch } from '../store';

export function VideoPlayer() {
  const dispatch = useAppDispatch()

  const { currentLesson } = useCurrentLesson()

  const handlePlayNext = () => {
    dispatch(next())
  }

  if (!currentLesson) return null

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        onEnded={handlePlayNext}
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  );
}