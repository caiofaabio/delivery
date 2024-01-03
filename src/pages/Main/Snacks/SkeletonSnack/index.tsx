import Skeleton from "../../../../components/Skeleton";
import { Container } from "./style";

export default function SkeletonSnack(){
  return (
    <div className="skeleton-wrapper">
      <Container>
        <Skeleton type='title' />
        <Skeleton type='thumbnail' />
        <Skeleton type='text' />
        <div>
          <Skeleton type='title' />
          <Skeleton type='image' />
        </div>
      </Container>
    </div>
  )
}
