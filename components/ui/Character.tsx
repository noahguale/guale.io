
import { animated, useSpring } from '@react-spring/web'
import Image from "next/image"



export const Character = () => {

    const styles = useSpring({
        from: {
          transform: 'translate3d(0px,0,0)'
        },
        to: {
          transform: 'translate3d(0px,0,0)'
        }
      })

    return (
       <div className="Character">

          <Image className="Character_shadow pixelart" src="/images/DemoRpgCharacter.png" width={360} height={360} alt="Shadow"  unoptimized/>
          
          <Image className="Character_spritesheet pixelart face-down" src="/images/DemoRpgCharacter.png" width={360} height={360} alt="Character" unoptimized />
        
      
      </div>
    )
}