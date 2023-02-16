import {css} from "@emotion/react"
/** @jsxImportSource @emotion/react */

const homeContainer = css`
  margin: 0;
  padding: 0 12px;
  background-color: snow;
`
const midashi = css`
  border-left: 3px solid greenyellow;
  width: fit-content;
  background-color: oldlace;
`

export const Contact = () => {
    return(
        <div css={homeContainer}>
            <h2 css={midashi}>連絡先</h2>
            <a href="https://twitter.com/_Mamizu">twitter:@_Mamizu</a>
            <br/><br/><br/><br/><br/>
        </div>
    );
}