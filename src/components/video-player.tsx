import ReactPlayer from 'react-player'
import { useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { next } from '../store/slices/player';

export function VideoPlayer() {
  const dispatch = useDispatch()

  const lesson = useAppSelector((store) => {
    const currentModuleIndex = store.player.currentModuleIndex
    const currentLessonIndex = store.player.currentLessonIndex

    return store.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]
  })

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        onEnded={() => dispatch(next())}
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  );
}