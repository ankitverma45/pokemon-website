import classes from "./Section.module.css"
import SectionItem from "./SectionItem";

const Section=(props)=>{
    
     const pokemonItem=props.nameItem.map((item)=>{
        return <SectionItem 
          key={item.id}
          id={item.id}
          name={item.name}
          img={item.sprites.other.dream_world.front_default}
          height={item.height}
          weight={item.weight}
          abilities={item.abilities}
          moves={item.moves}
          stats={item.stats}
        />
     })

   return (
    <>
     <div className={classes["major-container"]}>
      <ul>{pokemonItem}</ul>
    </div>
    </>
   )
}
export default Section