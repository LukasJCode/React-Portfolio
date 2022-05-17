import "./index.scss";

const CarouselItem = (props) =>{
    return (
        <div className={props.active}>
            <img src={props.imgSrc} className="carousel-image" alt="..."/>
        </div>
    )
}
export default CarouselItem;