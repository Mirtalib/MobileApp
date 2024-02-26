import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#757575"
        d="M3.083 1.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 1 1-1.5 0v-4.5A2.25 2.25 0 0 1 3.083 0h4.5a.75.75 0 1 1 0 1.5h-4.5Zm14.25-.75a.75.75 0 0 1 .75-.75h4.5a2.25 2.25 0 0 1 2.25 2.25v4.5a.75.75 0 1 1-1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 1-.75-.75ZM1.583 16.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 0 .75.75h4.5a.75.75 0 1 1 0 1.5h-4.5a2.25 2.25 0 0 1-2.25-2.25v-4.5a.75.75 0 0 1 .75-.75Zm22.5 0a.75.75 0 0 1 .75.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a.75.75 0 1 1 0-1.5h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 1 .75-.75ZM5.333 6.75a.75.75 0 0 1 1.5 0v10.5a.75.75 0 1 1-1.5 0V6.75Zm3 0a.75.75 0 0 1 1.5 0v10.5a.75.75 0 1 1-1.5 0V6.75Zm3 0a.75.75 0 1 1 1.5 0v10.5a.75.75 0 1 1-1.5 0V6.75Zm3 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V6.75Zm4.5 0a.75.75 0 1 1 1.5 0v10.5a.75.75 0 1 1-1.5 0V6.75Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.833 0h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
