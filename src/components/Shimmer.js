import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <>
      <ShimmerSimpleGallery
        imageType="thumbnail"
        row={10}
        col={2}
        imageHeight={200}
        caption
      />
      <ShimmerSimpleGallery card imageHeight={300} />
      <ShimmerSimpleGallery card imageHeight={300} caption />
    </>
  );
};

export default Shimmer;
