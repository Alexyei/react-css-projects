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
        <div>
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
const ContainerAlignItems:FC = ()=>{
    return (<ExampleSection styleName={'align-items'}
                            styleVariants={['flex-start','flex-end', 'center', 'baseline', 'stretch']}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ height: '200px', alignItems: style as any}}
                                         className={classes.parent}>
                                        <div  className={classes.child}></div>
                                        <div style={{minWidth:'3rem',minHeight:'3rem'}}  className={classes.child}></div>
                                        <div  className={classes.child + " " + classes.active}></div>
                                        <div  className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        display: flex;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        height: 200px;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        <mark>align-items:{style}</mark>
                                        <br/>
                                        &#125;
                                    </code>

                                </>
                            }>
        <p>Свойство align-items выравнивает флекс-элементы внутри контейнера в перпендикулярном направлении.</p>
        <p><strong>Применяется к:</strong> flex контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> stretch</p>
        <dl>
            <dt>flex-start</dt>
            <dd>Флексы выравниваются в начале поперечной оси контейнера.
            </dd>
            <dt>flex-end</dt>
            <dd>Флексы выравниваются в конце поперечной оси контейнера.
            </dd>
            <dt>center</dt>
            <dd>Флексы выравниваются по линии поперечной оси.</dd>
            <dt>baseline</dt>
            <dd>Флексы выравниваются по их базовой линии.</dd>
            <dt>stretch</dt>
            <dd>Флексы растягиваются таким образом, чтобы занять всё доступное пространство контейнера.</dd>
         </dl>
    </ExampleSection>)
}
const ContainerAlignContent:FC = ()=>{
    return (<ExampleSection styleName={'align-content'}
                            styleVariants={['flex-start','flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch']}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ height: '200px', flexWrap:'wrap', alignContent: style as any}}
                                         className={classes.parent}>
                                        <div style={{width: '30%'}} className={classes.child}></div>
                                        <div style={{minWidth:'3rem',minHeight:'3rem', width: '30%'}}  className={classes.child}></div>
                                        <div style={{width: '30%'}} className={classes.child + " " + classes.active}></div>
                                        <div style={{width: '30%'}} className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        display: flex;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        height: 200px;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        <mark>alignItems:{style}</mark>
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        width: 30%;
                                        <br/>
                                        &#125;
                                    </code>

                                </>
                            }>
        <p>Свойство align-content задаёт тип выравнивания строк внутри flex контейнера по поперечной оси при наличии свободного пространства.</p>
        <p><strong>Применяется к:</strong> flex контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> stretch</p>
        <dl>
            <dt>flex-start</dt>
            <dd>Строки располагаются в начале поперечной оси. Каждая следующая строка идёт вровень с предыдущей.</dd>
            <dt>flex-end</dt>
            <dd>Строки располагаются начиная с конца поперечной оси. Каждая предыдущая строка идёт вровень со следующей.</dd>
            <dt>center</dt>
            <dd>Строки располагаются по центру контейнера.</dd>
            <dt>space-between</dt>
            <dd>Строки равномерно распределяются в контейнере и расстояние между ними одинаково.</dd>
            <dt>space-around</dt>
            <dd>Строки равномерно распределяются таким образом, чтобы пространство между двумя соседними строками было одинаковым. Пустое пространство перед первой строкой и после последней строки равно половине пространства между двумя соседними строками.</dd>
            <dt>space-evenly</dt>
            <dd>Строки распределяются равномерно. Пустое пространство перед первой строкой и после последней строки имеет ту же ширину, что и у других строк.</dd>
            <dt>stretch</dt>
            <dd>Строки равномерно растягиваются, заполняя свободное пространство.</dd>
        </dl>
    </ExampleSection>)
}

const ElementOrder:FC = ()=>{
    return (<ExampleSection styleName={'order'}
                            styleVariants={['-1','0', '1']}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div
                                         className={classes.parent}>
                                        <div  className={classes.child}></div>
                                        <div   className={classes.child}></div>
                                        <div style={{order: style}} className={classes.child + " " + classes.active}></div>
                                        <div className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        display: flex;
                                        <br/>
                                        .child-active&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        <mark>order:{style}</mark>
                                        <br/>
                                        &#125;
                                    </code>

                                </>
                            }>
        <p>Свойство order определяет порядок вывода флексов внутри флекс-контейнера. Элементы располагаются согласно значениям свойства order от меньшего к большему. При равных значениях order элементы выводятся в том порядке, в каком они появляются в исходном коде.</p>
        <p><strong>Применяется к:</strong> flex элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> 0</p>
    </ExampleSection>)
}
const ElementAlignSelf:FC = ()=>{
    return (<ExampleSection styleName={'align-self'}
                            styleVariants={['flex-start','flex-end', 'center', 'baseline',  'stretch']}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ height: '200px',alignItems:"flex-start"}}
                                         className={classes.parent}>
                                        <div  className={classes.child}></div>
                                        <div style={{minWidth:'4rem',minHeight:'4rem'}}  className={classes.child}></div>
                                        <div style={{alignSelf: style}} className={classes.child + " " + classes.active}></div>
                                        <div  className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        display: flex;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        height: 200px;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        <mark>align-self:{style}</mark>
                                        <br/>
                                        &#125;
                                    </code>

                                </>
                            }>
        <p>Свойство align-self выравнивает флекс-элементы текущей строки, переписывая значение align-items.<strong>Если встроенная ось гибкого элемента совпадает с поперечной осью, значение baseline идентично flex-start. https://stackoverflow.com/a/40727921/10000274</strong></p>
        <p><strong>Применяется к:</strong> flex элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> auto</p>
        <dl>
            <dt>flex-start</dt>
            <dd>Элемент выравнивается в начале поперечной оси контейнера.</dd>
            <dt>flex-end</dt>
            <dd>Элемент выравнивается в конце поперечной оси контейнера.</dd>
            <dt>center</dt>
            <dd>Элемент выравнивается по центральной линии на поперечной оси.</dd>
            <dt>baseline</dt>
            <dd>Элемент выравнивается по базовой линии текста.</dd>
            <dt>stretch</dt>
            <dd>Элемент растягивается таким образом, чтобы занять всё свободное пространство контейнера по поперечной оси.</dd>
        </dl>
    </ExampleSection>)
}
const ElementFlexGrow:FC = ()=>{
    return (<ExampleSection styleName={'flex-grow'}
                            styleVariants={['0','-1', '1', '2']}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ height: '200px'}}
                                         className={classes.parent}>
                                        <div  className={classes.child}></div>
                                        <div   className={classes.child}></div>
                                        <div style={{flexGrow: style}} className={classes.child + " " + classes.active}></div>
                                        <div style={{flexGrow: style === '2'?1:0}}  className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        display: flex;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        height: 200px;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        <mark>flex-grow:{style}</mark>
                                        <br/>
                                        &#125;
                                    </code>

                                </>
                            }>
        <p>Свойство flex-grow задает коэффициент роста flex для заданного числа. Отрицательное значение не валидно. <strong>Когда flex-grow 2 для последнего элемента устанавливается flex-grow 1. Если для последнего элемента не установить свойства то разницы между flex-grow 1 и 2 не будет</strong></p>
        <p><strong>Применяется к:</strong> flex элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> 0</p>
    </ExampleSection>)
}
const ElementFlexShrink:FC = ()=>{
    return (<ExampleSection styleName={'flex-shrink'}
                            styleVariants={['0','-1', '1', '2']}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ height: '200px'}}
                                         className={classes.parent}>
                                        <div style={{width: '40%'}} className={classes.child}></div>
                                        <div style={{width: '40%'}}  className={classes.child}></div>
                                        <div style={{width: '40%',flexShrink: style}} className={classes.child + " " + classes.active}></div>
                                        <div style={{width: '40%'}}  className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        display: flex;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        height: 200px;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        width: 40%
                                        <br/>
                                        .child-active&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        <mark>flex-shrink:{style}</mark>
                                        <br/>
                                        &#125;
                                    </code>

                                </>
                            }>
        <p>Свойство flex-shrink задает коэффициент сжатия flex с заданным числом. Отрицательное значение не валидно. Чем больше коэффициент тем сильнее сжимается, при 0 не сжимается</p>
        <p><strong>Применяется к:</strong> flex элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> 1</p>
    </ExampleSection>)
}
const ElementFlexBasis:FC = ()=>{
    return (<ExampleSection styleName={'flex-basis'}
                            styleVariants={['0','auto','content', '100px', '200px']}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ height: '200px'}}
                                         className={classes.parent}>
                                        <div style={{width: '40%'}} className={classes.child}></div>
                                        <div style={{width: '40%'}}  className={classes.child}></div>
                                        <div style={{width: '40%',flexBasis: style}} className={classes.child + " " + classes.active}></div>
                                        <div style={{width: '40%'}}  className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        display: flex;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        height: 200px;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        width: 40%
                                        <br/>
                                        .child-active&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        <mark>flex-basis:{style}</mark>
                                        <br/>
                                        &#125;
                                    </code>

                                </>
                            }>
        <p>Свойство flex-basis переписывает свойство width (или height), но свойства min-width (или min-height) переписывают flex-basis.</p>
        <p><strong>Применяется к:</strong> flex элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> auto</p>
    </ExampleSection>)
}
const ElementFlex:FC = ()=>{
    return (<ExampleSection styleName={'flex'}
                            styleVariants={['0 1 auto','2','0 1 20%', '2 1', '0 1 200px', '2 1 auto','0 2']}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ height: '200px'}}
                                         className={classes.parent}>
                                        <div style={{width: '20%'}} className={classes.child}></div>
                                        <div style={{width: '20%'}}  className={classes.child}></div>
                                        <div style={{width: '20%',flex: style}} className={classes.child + " " + classes.active}></div>
                                        <div style={{width: '20%'}}  className={classes.child}></div>
                                    </div>
                                </>
                            }
                            code={
                                (style) => <>
                                    <code>
                                        .parent&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        display: flex;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        height: 200px;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        width: 40%
                                        <br/>
                                        .child-active&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        <mark>flex:{style}</mark>
                                        <br/>
                                        &#125;
                                    </code>

                                </>
                            }>
        <p>Свойство flex является сокращенной записью свойств flex-grow, flex-shrink и flex-basis. Значение по-умолчанию: 0 1 auto (однако flex: 2; == flex-grow: 2;flex-shrink: 1;flex-basis: 0%; );</p>
        <p><strong>Применяется к:</strong> flex элементам.</p>
        <p><strong>Значение по-умолчанию:</strong> 0 1 auto</p>
    </ExampleSection>)
}

const GridGuidePage: FC = () => {
    return (
        <article>
            <h1>Шпаргалка по Grid CSS</h1>
            <p>Вся документация по свойству <code>grid</code> находится на <a target="_blank"
                                                                              href="https://www.w3.org/TR/css-grid-1/">официальном
                сайте</a>.</p>
            <h2>Свойства контейнера:</h2>
            <ContainerDisplay/>
            <ContainerGridTemplateColumns/>
            <ContainerGridTemplateRows/>
            <ContainerGridTemplateAreas/>
            <ContainerGridTemplate/>
            <h2>Свойства элемента:</h2>
            <ElementOrder/>
            <ElementAlignSelf/>
            <ElementFlexGrow/>
            <ElementFlexShrink/>
            <ElementFlexBasis/>
            <ElementFlex/>

        </article>
    )
}

export default GridGuidePage;