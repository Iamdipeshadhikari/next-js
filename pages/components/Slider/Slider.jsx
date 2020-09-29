import SliderComponent from "react-slick";
import styled from "styled-components";
import PostCard from "../PostCard/PostCard";

function Arrow(props) {
  let classNames = props.type === "next" ? "nextArrow" : "prevArrow";
  classNames += " arrow";

  const Icon =
    props.type === "next" ? (
      <i className="fas fa-arrow-right"></i>
    ) : (
      <i className="fas fa-arrow-left"></i>
    );

  return (
    <SliderArrow className={classNames} onClick={props.onClick}>
      {Icon}
    </SliderArrow>
  );
}

const POSTDATA = [
  {
    title: "To unreserved projection no introduced invitation",
    thumbnail: "/Images/post1.jpg",
    postDate: "5 hrs",
    authorDate: "5 months ago",
    authorName: "Will smith",
    authorImage: "Images/post1.jpg",
  },
  {
    title: "To unreserved projection no introduced invitation",
    thumbnail: "/Images/post1.jpg",
    postDate: "5 hrs",
    authorDate: "5 months ago",
    authorName: "Will smith",
    authorImage: "Images/post1.jpg",
  },
  {
    title: "To unreserved projection no introduced invitation",
    thumbnail: "/Images/post1.jpg",
    postDate: "5 hrs",
    authorDate: "5 months ago",
    authorName: "Will smith",
    authorImage: "Images/post1.jpg",
  },
  {
    title: "To unreserved projection no introduced invitation",
    thumbnail: "/Images/post1.jpg",
    postDate: "5 hrs",
    authorDate: "5 months ago",
    authorName: "Will smith",
    authorImage: "Images/post1.jpg",
  },
];

export default function Slider(props) {
  const ResponsiveSlider = {
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <SliderComponent {...ResponsiveSlider}>
        {POSTDATA.map((item, i) => (
          <PostCard key={i} post={item} />
        ))}
      </SliderComponent>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  width: 100%;

  .slick-list {
    width: 90%;
    margin: 0 auto;
  }

  .nextArrow {
    position: absolute;
    top: 50%;
    right: 1rem;
  }

  .prevArrow {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateX(-1.5rem);
  }
`;
const SliderArrow = styled.button`
  border: none;
  outline: none;
  height: 2.5rem;
  width: 2.5rem;
  background-color: #f8b195;
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 100;

  &:hover {
    background-color: #f67280;
    box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }
`;
