import "./index.scss";
import CarouselItem from "./CarouselItem";
import projectdata from "../../data/projectdata";

var imgs = [];

function selectProject(id)
{
    var item = null;
    projectdata.forEach(e => {
        if(e.id === id)
            item = e;
    });
    imgs = item.imgs;
}

function createCarouselItem(img, index){
    var classVar = "carousel-item";
    if(index === 0)
        classVar = "carousel-item active";
    else
        classVar = "carousel-item";

    return(
        <CarouselItem
            key={index}
            imgSrc={img}
            active={classVar}
        />
    )
}

const Carousel = (props) =>{
    return (
        <div className="carousel-container">
            <div id="project-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#project-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#project-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#project-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#project-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    {selectProject(props.id)}             
                    {imgs.map((currentElement, index)=>{
                        return createCarouselItem(currentElement, index);
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#project-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#project-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Carousel;