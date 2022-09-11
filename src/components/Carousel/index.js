import "./index.scss";
import CarouselItem from "./CarouselItem";
import projectdata from "../../data/projectdata";

var imgs = [];

function selectProject(id)
{
    imgs = projectdata[id].imgs;
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

function createIndicators(img, index){
    console.log(index);
    var classVar = "";
    if(index === 0)
        classVar = "active";
    else
        classVar = "";
    return(
        <button type="button" data-bs-target="#project-carousel" className={classVar} data-bs-slide-to={index} aria-label={"Slide " + (index + 1)}></button>
    )
}

const Carousel = (props) =>{
    return (
        <div className="carousel-container">
            <div id="project-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false">
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
                <div className="carousel-indicators">
                    {imgs.map((img, index)=>{
                        return createIndicators(img, index);
                    })}
                </div>
            </div>
        </div>
    )
}
export default Carousel;