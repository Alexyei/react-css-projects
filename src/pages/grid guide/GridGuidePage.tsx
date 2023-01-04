import {CSSProperties, FC, ReactNode, useState} from "react";
import classes from './GridGuide.module.scss'


const ExampleSection: FC<{
    styleName: string, styleVariants: string[],
    children: ReactNode,
    view: (currentStyle: string) => ReactNode,
    code: (currentStyle: string) => ReactNode
}> = ({styleName, styleVariants, children, view, code}) => {
    const [style, setStyle] = useState<(typeof styleVariants [number])>(styleVariants[0])

    return (
        <div id={styleName}>
            <h2>{styleName}</h2>
            <ul className={classes.buttons}>
                {
                    styleVariants.map((el) => {
                        return <li onClick={() => setStyle(el)} key={el} className={el === style && classes.active}><h6>
                            <a>{el}</a></h6></li>
                    })
                }
            </ul>
            <div className={classes.content}>
                <div className={classes.view}>
                    {view(style)}
                </div>
                <div className={classes.code}>
                    {code(style)}
                    <button onClick={() => {
                        navigator.clipboard.writeText(`${styleName}: ${style};`)
                    }} className={classes.copy}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"/>
                        </svg>
                    </button>
                </div>
            </div>
            {children}
        </div>
    )
}

const ContainerDisplay: FC = () => {
    return (
        <ExampleSection styleName={'display'} styleVariants={['grid', 'inline-grid']}
                        view={
                            (style) => <>
                                Здесь текст
                                <div style={{display: style}} className={classes.parent}>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child + " " + classes.active}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                </div>
                            </>
                        }
                        code={
                            (style) => <>
                                <code>
                                    .parent&#123;
                                    <br/>
                                    <mark>display:{style}</mark>
                                    <br/>
                                    &#125;
                                </code></>
                        }>
            <p>Многоцелевое свойство, которое определяет, как элемент должен быть показан в документе.</p>
            <p><strong>Применяется ко:</strong> всем элементам.</p>
            <dl>
                <dt>grid</dt>
                <dd>Элемент ведёт себя как блочный и выкладывает содержимое согласно grid-модели.</dd>
                <dt>inline-grid</dt>
                <dd>Элемент ведёт себя как строчный и выкладывает содержимое согласно grid-модели.</dd>
               </dl>
        </ExampleSection>)
}
const ContainerGridTemplateColumns: FC = () => {
    return (
        <ExampleSection styleName={'grid-template-columns'}
                        styleVariants={['100px 50px 100px', '50px 1fr 50px', 'repeat(3 ,80px)', '80px repeat(1, 1fr) 2fr', 'minmax(100px, max-content) 1fr 2fr', 'fit-content(40%) 80px 100px','[linename1] 100px [linename2 linename3]','[main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end]', 'none']}
                        view={
                            (style) => <>
                                Здесь текст
                                <div style={{gridTemplateColumns: style as any}}
                                     className={classes.parent}>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child + " " + classes.active}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                </div>
                            </>
                        }
                        code={
                            (style) => <>
                                <code>
                                    .parent&#123;
                                    <br/>
                                    display: grid;
                                    <br/>
                                    <mark>grid-template-columns:{style}</mark>
                                    <br/>
                                    &#125;
                                </code></>
                        }>
            <p>Свойство grid-template-columns количество и размеры колонок grid. Также данное свойство может опередять названия вертикальных линий (не колонок) grid-а (если у grid 3 колонки, то у него 4 линии |1|2|3| == [first-line]1[second-line]2[third-line]3[fourth-line]).Имена линий могут использоваться в других grid-свойствах, например: (.box1&#123;
                grid-column-start: main-start;
                grid-column-end: main-end;
                &#125;). Также у одной линии может быть несколько имён, указывать через пробел: [first-line first-line-second-name]</p>
            <p><strong>Применяется к:</strong> grid контейнерам.</p>
            <p><strong>Значение по-умолчанию:</strong>none</p>
        </ExampleSection>
    )
}
const ContainerGridTemplateRows:FC = ()=>{
    return (
        <ExampleSection styleName={'grid-template-rows'}
                        styleVariants={['100px 50px 100px', '50px 1fr 50px', 'repeat(3 ,80px)', '80px repeat(1, 1fr) 2fr', 'minmax(100px, max-content) 1fr 2fr', 'fit-content(40%) 80px 100px','[linename1] 100px [linename2 linename3]','[main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end]', 'none']}
                        view={
                            (style) => <>
                                Здесь текст
                                <div style={{gridTemplateRows: style as any}}
                                     className={classes.parent}>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child + " " + classes.active}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                </div>
                            </>
                        }
                        code={
                            (style) => <>
                                <code>
                                    .parent&#123;
                                    <br/>
                                    display: grid;
                                    <br/>
                                    <mark>grid-template-rows:{style}</mark>
                                    <br/>
                                    &#125;
                                </code></>
                        }>
            <p>Свойство grid-template-rows количество и размеры колонок grid. Также данное свойство может опередять названия вертикальных линий (не колонок) grid-а (если у grid 3 колонки, то у него 4 линии |1|2|3| == [first-line]1[second-line]2[third-line]3[fourth-line]).Имена линий могут использоваться в других grid-свойствах, например: (.box1&#123;
                grid-row-start: main-start;
                grid-row-end: main-end;
                &#125;). Также у одной линии может быть несколько имён, указывать через пробел: [first-line first-line-second-name]</p>
            <p><strong>Применяется к:</strong> grid контейнерам.</p>
            <p><strong>Значение по-умолчанию:</strong>none</p>
        </ExampleSection>
    )
}
const ContainerGridTemplateAreas:FC = ()=>{
    return (<ExampleSection styleName={'grid-template-areas'}
                            styleVariants={[ '"a a a" "b c c" "b c c"',"'b b a' 'b b c' 'b b c'", '"a a ." ". b b" "c c ."']}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate:"50px 50px 50px / 50px 50px 50px", gridTemplateAreas: style as any,}}
                                         className={classes.parent}>
                                        <div style={{gridArea:"a"}} className={classes.child}></div>
                                        <div style={{gridArea:"b"}} className={classes.child}></div>
                                        <div style={{gridArea:"c"}}className={classes.child + " " + classes.active}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: 50px 50px 50px / 50px 50px 50px
                                        <br/>
                                        <mark>grid-template-areas:{style}</mark>
                                        <br/>
                                        &#125;
                                        <br/>
                                        .child&#123;
                                        grid-area: a | b | c
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство grid-template-areas создаёт grid-области путём размещения именованных ячеек в грид-раскладке.</p>
        <p><strong>Применяется к:</strong> grid контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> none</p>
    </ExampleSection>)
}
const ContainerGridTemplate:FC = ()=>{
    return (<ExampleSection styleName={'grid-template'}
                            styleVariants={[ '"a a a" 50px "b c c" 50px "b c c" 50px / 50px 50px 50px',"'b b a' 1fr 'b b c' 2fr 'b b c' 50px / 50px 50px 3fr", '"a a ." 50px ". b b" 50px "c c ." 50px / 50px 50px 50px']}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: style as any,}}
                                         className={classes.parent}>
                                        <div style={{gridArea:"a"}} className={classes.child}></div>
                                        <div style={{gridArea:"b"}} className={classes.child}></div>
                                        <div style={{gridArea:"c"}}className={classes.child + " " + classes.active}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        <mark>grid-template:{style}</mark>
                                        <br/>
                                        &#125;
                                        <br/>
                                        .child&#123;
                                        grid-area: a | b | c
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство grid-template является сокращением для свойств: grid-template-rows, grid-template-columns, grid-template-areas</p>
        <p><strong>Применяется к:</strong> grid контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> none</p>
    </ExampleSection>)
}
const ContainerRowGap:FC = ()=>{
    return (<ExampleSection styleName={'row-gap'}
                            styleVariants={[ "5px","20px", "5%", "1em", "calc(5% + 5px)", "normal"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",rowGap: style as any}}
                                         className={classes.parent}>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr)
                                        <br/>
                                        <mark>gap: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство row-gap задаёт отступы мужду строками.</p>
        <p><strong>Применяется к:</strong> grid контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> normal</p>
    </ExampleSection>)
}
const ContainerColumnGap:FC = ()=>{
    return (<ExampleSection styleName={'column-gap'}
                            styleVariants={[ "5px","20px", "5%", "1em", "calc(5% + 5px)", "normal"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",columnGap: style as any}}
                                         className={classes.parent}>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr)
                                        <br/>
                                        <mark>gap: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство column-gap задаёт отступы мужду колонками.</p>
        <p><strong>Применяется к:</strong> grid контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> normal</p>
    </ExampleSection>)
}
const ContainerGap:FC = ()=>{
    return (<ExampleSection styleName={'gap'}
                            styleVariants={[ "5px","5px 20px", "5%", "1em", "calc(5% + 5px)", "normal"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",gap: style as any}}
                                         className={classes.parent}>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr)
                                        <br/>
                                        <mark>gap: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство gap является сокращением для свойств: row-gap и column-gap. Свойство задаёт отступы мужду столбцами и строками.</p>
        <p><strong>Применяется к:</strong> grid контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> normal</p>
    </ExampleSection>)
}
const ContainerJustifyItems:FC = ()=>{
    return (<ExampleSection styleName={'justify-items'}
                            styleVariants={[ "start","end", "center", "stretch", "legacy", "normal", "auto"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",justifyItems: style as any, columnGap: "20px"}}
                                         className={classes.parent}>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        column-gap: 20px;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr)
                                        <br/>
                                        <mark>justify-items: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство justify-items выравнивает элементы grid-сетки внутри колонок по горизонтальной оси</p>
        <p><strong>Применяется к:</strong> grid контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> auto</p>
    </ExampleSection>)
}
const ContainerAlignItems:FC = ()=>{
    return (<ExampleSection styleName={'align-items'}
                            styleVariants={[ "start","end", "center", "stretch", "legacy", "normal", "auto"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",alignItems: style as any, rowGap: "20px", height: "200px"}}
                                         className={classes.parent}>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        row-gap: 20px;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr)
                                        <br/>
                                        <mark>align-items: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство align-items выравнивает элементы grid-сетки внутри строк по вертикальной оси</p>
        <p><strong>Применяется к:</strong> grid контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> normal</p>
    </ExampleSection>)
}

const ContainerJustifyContent:FC = ()=>{
    return (<ExampleSection styleName={'justify-content'}
                            styleVariants={[ "start","end", "center", "stretch", "space-between", "space-around", "space-evenly", "normal"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 50px) / repeat(3, 50px)",justifyContent: style as any, columnGap: "10px", height: "250px"}}
                                         className={classes.parent}>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        column-gap: 10px;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr)
                                        <br/>
                                        <mark>justify-content: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство justify-content выравнивает столбцы grid-сетки внутри контейнера</p>
        <p><strong>Применяется к:</strong> grid контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> normal</p>
    </ExampleSection>)
}
const ContainerAlignContent:FC = ()=>{
    return (<ExampleSection styleName={'align-content'}
                            styleVariants={[ "start","end", "center", "stretch", "space-between", "space-around", "space-evenly", "normal"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 50px) / repeat(3, 50px)",alignContent: style as any, rowGap: "10px", height: "250px"}}
                                         className={classes.parent}>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        row-gap: 10px;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr)
                                        <br/>
                                        <mark>align-content: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство align-content выравнивает строки grid-сетки внутри контейнера</p>
        <p><strong>Применяется к:</strong> grid контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> normal</p>
    </ExampleSection>)
}

const ContainerGridAutoFlow:FC = ()=>{
    return (<ExampleSection styleName={'grid-auto-flow'}
                            styleVariants={[ "row","column","dense"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",gridAutoFlow: style as any, rowGap: "10px",}}
                                         className={classes.parent}>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        row-gap: 10px;
                                        <br/>
                                        <mark>grid-auto-flow: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство grid-auto-flow опредяляет алгоритм размещения элементов в grid-сетке</p>
        <p><strong>Применяется к:</strong> grid контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> row</p>
        <dl>
            <dt>row</dt>
            <dd>Алгоритм размещает элементы, заполняя каждую строку поочередно, добавляя новые строки по мере необходимости.</dd>
            <dt>column</dt>
            <dd>Алгоритм помещает элементы, заполняя каждый столбец поочередно, добавляя по мере необходимости новые столбцы.</dd>
            <dt>dense</dt>
            <dd>алгоритм использует «плотный» алгоритм упаковки, который пытается заполнить дыры в сетке, если позже появятся более мелкие элементы. Это может привести к тому, что элементы появятся не по порядку, но при этом заполнят отверстия, оставленные более крупными элементами.</dd>
        </dl>
    </ExampleSection>)
}

const ContainerGridAutoRows:FC = ()=>{
    return (<ExampleSection styleName={'grid-auto-rows'}
                            styleVariants={[ "20px","150px","4em","20%"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(2, 1fr) / repeat(2, 1fr)",gridAutoRows: style as any, rowGap: "10px",height: "250px"}}
                                         className={classes.parent}>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        row-gap: 10px;
                                        <br/>
                                        grid-template: repeat(2, 1fr) / repeat(2, 1fr);
                                        <br/>
                                        <mark>grid-auto-flow: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство grid-auto-rows опредяляет размер неявно созданных строк grid-сетки. В данном примере явно создано 2 строки.</p>
        <p><strong>Применяется к:</strong> grid контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> auto</p>
    </ExampleSection>)
}

const ContainerGridAutoColumns:FC = ()=>{
    return (<ExampleSection styleName={'grid-auto-columns'}
                            styleVariants={[ "20px","150px","4em","20%"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(2, 1fr) / repeat(2, 1fr)",gridAutoColumns: style as any, rowGap: "10px",height: "250px"}}
                                         className={classes.parent}>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div style={{gridColumn: "3"}} className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div style={{gridColumn: "4"}} className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        row-gap: 10px;
                                        <br/>
                                        grid-template: repeat(2, 1fr) / repeat(2, 1fr);
                                        <br/>
                                        <mark>grid-auto-flow: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство grid-auto-columns опредяляет размер неявно созданных колонок grid-сетки. В данном примере явно создано 2 колонки.</p>
        <p><strong>Применяется к:</strong> grid контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> auto</p>
    </ExampleSection>)
}

const ElementJustifySelf:FC = ()=>{
    return (<ExampleSection styleName={'justify-self'}
                            styleVariants={[ "start","end","center","stretch","auto"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"}}
                                         className={classes.parent}>
                                        <div style={{justifySelf: style}} className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
                                        <br/>
                                        &#125;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <mark>justify-self: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство justify-self выравнивает содержимое элемента вдоль оси строки (в отличии от align-self, который выравнивает вдоль оси столбца).</p>
        <p><strong>Применяется к:</strong> grid элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> auto</p>
    </ExampleSection>)
}

const ElementAlignSelf:FC = ()=>{
    return (<ExampleSection styleName={'align-self'}
                            styleVariants={[ "start","end","center","stretch","auto"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",height:"200px"}}
                                         className={classes.parent}>
                                        <div style={{alignSelf: style}} className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
                                        <br/>
                                        height: 200px;
                                        <br/>
                                        &#125;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <mark>align-self: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство align-self выравнивает содержимое элемента вдоль оси колонки (в отличии от justify-self, который выравнивает вдоль оси столбца).</p>
        <p><strong>Применяется к:</strong> grid элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> auto</p>
    </ExampleSection>)
}

const ElementOrder:FC = ()=>{
    return (<ExampleSection styleName={'order'}
                            styleVariants={[ "-1","0","-2","2","10","-10"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",height:"200px"}}
                                         className={classes.parent}>
                                        <div  className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div style={{order: style}} className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
                                        <br/>
                                        height: 200px;
                                        <br/>
                                        &#125;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <mark>order: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство order определяет порядок элемента в сетке</p>
        <p><strong>Применяется к:</strong> grid элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> 0</p>
    </ExampleSection>)
}

const ElementGridRowStart:FC = ()=>{
    return (<ExampleSection styleName={'grid-row-start'}
                            styleVariants={[ "-1","0","1","2","-2","span -2","span 2","span 3", "span 10", "auto"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"}}
                                         className={classes.parent}>
                                        <div  className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div style={{gridRowStart: style}} className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
                                        <br/>
                                        height: 200px;
                                        <br/>
                                        &#125;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <mark>grid-row-start: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство grid-row-start определяет положение элемента в сетке по строке</p>
        <p><strong>Применяется к:</strong> grid элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> auto</p>
    </ExampleSection>)
}

const ElementGridRowEnd:FC = ()=>{
    return (<ExampleSection styleName={'grid-row-end'}
                            styleVariants={[ "-1","0","1","2","-2","span -2","span 2","span 3", "span 10", "auto"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"}}
                                         className={classes.parent}>
                                        <div  className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div style={{gridRowEnd: style}} className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
                                        <br/>
                                        height: 200px;
                                        <br/>
                                        &#125;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <mark>grid-row-end: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство grid-row-end определяет положение элемента в сетке по строке</p>
        <p><strong>Применяется к:</strong> grid элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> auto</p>
    </ExampleSection>)
}


const ElementGridRow:FC = ()=>{
    return (<ExampleSection styleName={'grid-row'}
                            styleVariants={[ "-1","0","1","2","-2","span -2","span 2","span 3", "span 10", "auto", "1 / 3", "2 / -1", "1 / span 2"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"}}
                                         className={classes.parent}>
                                        <div  className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div style={{gridRow: style}} className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
                                        <br/>
                                        height: 200px;
                                        <br/>
                                        &#125;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <mark>grid-row: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство grid-row-start определяет положение элемента в сетке по строке</p>
        <p><strong>Применяется к:</strong> grid элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> (grid-row-start) auto / (grid-row-end) auto</p>
    </ExampleSection>)
}

const ElementGridColumnStart:FC = ()=>{
    return (<ExampleSection styleName={'grid-column-start'}
                            styleVariants={[ "-1","0","1","2","-2","span -2","span 2","span 3", "span 10", "auto"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"}}
                                         className={classes.parent}>
                                        <div  className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div style={{gridColumnStart: style}} className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
                                        <br/>
                                        height: 200px;
                                        <br/>
                                        &#125;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <mark>grid-column-start: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство grid-column-start определяет положение элемента в сетке по столбцу</p>
        <p><strong>Применяется к:</strong> grid элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> auto</p>
    </ExampleSection>)
}

const ElementGridColumnEnd:FC = ()=>{
    return (<ExampleSection styleName={'grid-column-end'}
                            styleVariants={[ "-1","0","1","2","-2","span -2","span 2","span 3", "span 10", "auto"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"}}
                                         className={classes.parent}>
                                        <div  className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div style={{gridColumnEnd: style}} className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
                                        <br/>
                                        height: 200px;
                                        <br/>
                                        &#125;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <mark>grid-column-end: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство grid-column-end определяет положение элемента в сетке по столбцу</p>
        <p><strong>Применяется к:</strong> grid элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> auto</p>
    </ExampleSection>)
}

const ElementGridColumn:FC = ()=>{
    return (<ExampleSection styleName={'grid-column'}
                            styleVariants={[ "-1","0","1","2","-2","span -2","span 2","span 3", "span 10", "auto", "1 / 3", "2 / -1", "1 / span 2"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"}}
                                         className={classes.parent}>
                                        <div  className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div style={{gridColumn: style}} className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
                                        <br/>
                                        height: 200px;
                                        <br/>
                                        &#125;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <mark>grid-column: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство grid-column определяет положение элемента в сетке по столбцу</p>
        <p><strong>Применяется к:</strong> grid элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> (grid-column-start) auto / (grid-column-end) auto</p>
    </ExampleSection>)
}

const ElementGridArea:FC = ()=>{
    return (<ExampleSection styleName={'grid-area'}
                            styleVariants={[ "-1","0","1","2","-2","span -2","span 2","span 3", "span 10", "auto", "1 / 3", "2 / -1", "1 / span 2", "span 3 / 1","2 / 1 / 2","2 / 1 / 2 / 3"]}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"}}
                                         className={classes.parent}>
                                        <div  className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div style={{gridArea: style}} className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        display: grid;
                                        <br/>
                                        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
                                        <br/>
                                        height: 200px;
                                        <br/>
                                        &#125;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <mark>grid-area: {style}</mark>
                                        <br/>
                                        &#125;
                                    </code></>
                            }>
        <p>CSS-свойство grid-area определяет положение элемента в сетке по строке и столбцу</p>
        <p><strong>Применяется к:</strong> grid элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> (grid-row-start) auto / (grid-column-start) auto  / (grid-row-end) auto / (grid-column-end) auto</p>
    </ExampleSection>)
}

const Nav:FC = ()=>{
    return (
        <nav>
        <ul>
            <p>Свойства контейнера</p>
            <li><a href={"#display"}>display</a></li>
            <li><a href={"#grid-template-columns"}>grid-template-columns</a></li>
            <li><a href={"#grid-template-rows"}>grid-template-rows</a></li>
            <li><a href={"#grid-template-areas"}>grid-template-areas</a></li>
            <li><a href={"#grid-template"}>grid-template</a></li>
            <li><a href={"#row-gap"}>row-gap</a></li>
            <li><a href={"#column-gap"}>column-gap</a></li>
            <li><a href={"#gap"}>gap</a></li>
            <li><a href={"#justify-items"}>justify-items</a></li>
            <li><a href={"#align-items"}>align-items</a></li>
            <li><a href={"#justify-content"}>justify-content</a></li>
            <li><a href={"#align-content"}>align-content</a></li>
            <li><a href={"#grid-auto-flow"}>grid-auto-flow</a></li>
            <li><a href={"#grid-auto-rows"}>grid-auto-rows</a></li>
            <li><a href={"#grid-auto-columns"}>grid-auto-columns</a></li>
            <p>Свойства Элемента</p>
            <li><a href={"#justify-self"}>justify-self</a></li>
            <li><a href={"#align-self"}>align-self</a></li>
            <li><a href={"#order"}>order</a></li>
            <li><a href={"#grid-row-start"}>grid-row-start</a></li>
            <li><a href={"#grid-row-end"}>grid-row-end</a></li>
            <li><a href={"#grid-row"}>grid-row</a></li>
            <li><a href={"#grid-column-start"}>grid-column-start</a></li>
            <li><a href={"#grid-column-end"}>grid-column-end</a></li>
            <li><a href={"#grid-column"}>grid-column</a></li>
            <li><a href={"#grid-area"}>grid-area</a></li>
        </ul></nav>
    )
}

const GridGuidePage: FC = () => {
    return (
        <div className={classes.container}>
        <article>
            <h1>Шпаргалка по Grid CSS</h1>
            <p>Вся документация по свойству <code>grid</code> находится на <a target="_blank"
                                                                              href="https://www.w3.org/TR/css-grid-1/">официальном
                сайте</a>.</p>
            <Nav/>
            <h2>Свойства контейнера:</h2>
            <ContainerDisplay/>
            <ContainerGridTemplateColumns/>
            <ContainerGridTemplateRows/>
            <ContainerGridTemplateAreas/>
            <ContainerGridTemplate/>
            <ContainerRowGap/>
            <ContainerColumnGap/>
            <ContainerGap/>
            <ContainerJustifyItems/>
            <ContainerAlignItems/>
            <ContainerJustifyContent/>
            <ContainerAlignContent/>
            <ContainerGridAutoFlow/>
            <ContainerGridAutoRows/>
            <ContainerGridAutoColumns/>
            <h2>Свойства элемента:</h2>
            <ElementJustifySelf/>
            <ElementAlignSelf/>
            <ElementOrder/>
            <ElementGridRowStart/>
            <ElementGridRowEnd/>
            <ElementGridRow/>
            <ElementGridColumnStart/>
            <ElementGridColumnEnd/>
            <ElementGridColumn/>
            <ElementGridArea/>


        </article></div>
    )
}

export default GridGuidePage;