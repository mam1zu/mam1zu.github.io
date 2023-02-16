import {css} from "@emotion/react"
import ghImage from "./github-mark.png";
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

const ghImageCss = css`
        width:40px;
        height:40px;
`

export const Home = () => {
    return (
        <div css={ homeContainer }>
            <h2 css={midashi}>こんにちは</h2>
            ここは貯水池です<br/>
            Reactで書いたけどほぼReact使ってないサイトです。工事中<br/>
            前のサイトよりはいいかなという感じです。
            <h2 css={midashi}>自己紹介</h2>
            まみずです。CSを大学で勉強中です。<br/>
            昔はJavaでMinecraftのプラグインとかを作ってました。<br/>
            最近は特に何もしてないです。やばいと思ったのでちょっと色々やってみたけど全然プログラミングわからないです。<br/>
            基本情報を午後試験のデータベース問題で0点を取って落ちたことがあります。<br/>
            <h2 css={midashi}>Github</h2>
            <a href="https://github.com/Mamizu0312" target="_blank"><img src={ghImage} css={ghImageCss}/></a>
            <h2 css={midashi}>使用言語</h2>
            C, Java, HTML/CSS, JavaScript<br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}