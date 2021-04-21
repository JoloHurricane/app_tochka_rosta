import React,{useEffect} from 'react'
import ItemGallery from './ItemGallery'
import M from "materialize-css"

function Gallery(props){

    useEffect(()=>{
        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems, {});

    },)

    return(
        <>
        <section id="gallery">
            <div className="container">
                <h4 className={props.additionalClass}>
                   {props.titleSection}
                </h4>            
             <blockquote>
                {props.text}
            </blockquote>
          
                <div className="row">
                {!props.loading && props.images.map((image,index)=>{
                    return(
                        <ItemGallery pathIMG={`/images/galleryCategory/${props.title}/${image.img}`}/>
                    )
                  })}
                   
                   
                </div>
            </div>
        </section>
        </>

    )
}

export default Gallery