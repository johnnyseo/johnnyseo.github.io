import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { FunctionComponent } from 'react'
import PostHeadInfo from './PostHeadInfo'

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

type PostHeadProps = {
  thumbnail: IGatsbyImageData
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);
`

const PostHead: FunctionComponent<PostHeadProps> = ({
  title,
  date,
  categories,
  thumbnail,
}) => {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  )
}

export default PostHead
