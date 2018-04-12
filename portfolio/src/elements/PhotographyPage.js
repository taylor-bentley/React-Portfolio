import React, {Component} from 'react';
import '../App.css';
import ReactDom from 'react-dom'; 
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'

const photoItems = [
  {
    id: 1,
    src: './static/schwarzwald1.jpg',
    altText: 'Forest',
    caption: 'Schwarzwald--The Dark Forest.'
  },
  {
    id: 2,
    src: './static/sunsetcosta.jpg',
    altText: 'Sunset',
    caption: 'Costa Rican Sunset.'
  },
  {
    id: 3,
    src: './static/underthemush.jpg',
    altText: 'Mushroom',
    caption: 'Under the mush.'
  },
  {
    id: 4,
    src: './static/alexis.jpg',
    altText: 'Alexis',
    caption: 'Alexis in the flowers.'
  },
  {
    id: 5,
    src: './static/faeriesstillexist.jpg',
    altText: 'Fae',
    caption: 'Do faeries still exist?'
  },
  {
    id: 6,
    src: './static/greenojos.jpg',
    altText: 'Green Ojos',
    caption: 'Jaded eyes.'
  },
  {
    id: 7,
    src: './static/krab.jpg',
    altText: 'Krab',
    caption: 'The crabbiest dude I know.'
  },
  {
    id: 8,
    src: './static/ittakesanarmy.jpg',
    altText: 'Ants',
    caption: 'It takes an army.'
  },
  {
    id: 9,
    src: './static/peekingthroughthewater.jpg',
    altText: 'Turtle',
    caption: 'Peeking through the water.'
  },
  {
    id: 10,
    src: './static/BlueMorpho.jpg',
    altText: 'Blue Morpho',
    caption: 'My favorite butterfly--the glorious Blue Morpho.'
  }
];

class PhotographyPage extends Component {

  constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }

    onExiting() {
      this.animating = true;
    }

    onExited() {
      this.animating = false;
    }

    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === photoItems.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }

    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? photoItems.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }

    render() {
      const { activeIndex } = this.state;

      const slides = photoItems.map((item) => {
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            key={item.id}
            onExiting={this.onExiting}
            onExited={this.onExited}
          >
            <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      return (
        <div>
          <style>
            {
              `.custom-tag {
                  max-width: 100%;
                  height: 500px;
                  background: black;
                }`
            }
          </style>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators photoItems={photoItems} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
          <div className="Home">
            <nav>
              <a href="./">Return to Home Page</a>
            </nav>
          </div>
        </div>
      );
    }
  }

export default PhotographyPage;
