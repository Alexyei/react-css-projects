import {CSSProperties, FC, ReactNode, useState} from "react";
import classes from './FlexboxGuide.module.scss'


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
        <ExampleSection styleName={'display'} styleVariants={['flex', 'inline-flex']}
                        view={
                            (style) => <>
                                Здесь текст
                                <div style={{display: style}} className={classes.parent}>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child + " " + classes.active}></div>
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
                <dt>flex</dt>
                <dd>Элемент ведёт себя как блочный и выкладывает содержимое согласно флекс-модели.</dd>
                <dt>inline-flex</dt>
                <dd>Элемент ведёт себя как строчный и выкладывает содержимое согласно флекс-модели.</dd>
            </dl>
        </ExampleSection>)
}
const ContainerFlexDirection: FC = () => {
    return (
        <ExampleSection styleName={'flex-direction'}
                        styleVariants={['row', 'row-reverse', 'column', 'column-reverse']}
                        view={
                            (style) => <>
                                Здесь текст
                                <div style={{flexDirection: style as any, height: '200px'}}
                                     className={classes.parent}>
                                    <div className={classes.child}></div>
                                    <div className={classes.child}></div>
                                    <div className={classes.child + " " + classes.active}></div>
                                    <div className={classes.child}></div>
                                </div>
                            </>
                        }
                        code={
                            (style) => <>
                                <code>
                                    .parent&#123;
                                    <br/>
                                    display: flex;
                                    <br/>
                                    <>&nbsp;</>
                                    alignItems: flex-start;
                                    <br/>
                                    <mark>flex-direction:{style}</mark>
                                    <br/>
                                    &#125;
                                </code></>
                        }>
            <p>Свойство flex-direction задаёт направление основных осей в контейнере и тем самым определяет
                положение флексов в контейнере. На само направление также влияет значение атрибута dir у
                контейнера.</p>
            <p><strong>Применяется к:</strong> flex контейнерам.</p>
            <p><strong>Значение по-умолчанию:</strong>row</p>
            <dl>
                <dt>row</dt>
                <dd>Главная ось направлена так же, как и ориентация текста, по умолчанию слева направо. Если
                    значение dir задано как rtl, то направление оси идёт справа налево.
                </dd>
                <dt>row-reverse</dt>
                <dd>Похоже на значение row, но меняются местами начальная и конечная точки и главная ось направлена
                    справа налево. Если значение dir задано как rtl, то направление оси идёт слева направо.
                </dd>
                <dt>column</dt>
                <dd>Главная ось располагается вертикально и направлена сверху вниз.</dd>
                <dt>column-reverse</dt>
                <dd>Главная ось располагается вертикально, но меняется положение начальной и конечной точек и ось
                    направлена снизу вверх.
                </dd>
            </dl>
        </ExampleSection>
    )
}
const ContainerFlexWrap:FC = ()=>{
    return (
        <ExampleSection styleName={'flex-wrap'}
                        styleVariants={['nowrap', 'wrap-reverse', 'wrap']}
                        view={
                            (style) => <>
                                Здесь текст
                                <div style={{alignItems: 'flex-start', height: '200px', flexWrap: style as any}}
                                     className={classes.parent}>
                                    <div style={{width: '40%'}} className={classes.child}></div>
                                    <div style={{width: '40%'}} className={classes.child}></div>
                                    <div style={{width: '40%'}}
                                         className={classes.child + " " + classes.active}></div>
                                    <div style={{width: '40%'}} className={classes.child}></div>
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
                                    alignItems: flex-start;
                                    <br/>
                                    <>&nbsp;&nbsp;</>
                                    height: 200px;
                                    <br/>
                                    <>&nbsp;&nbsp;</>
                                    <mark>flex-wrap:{style}</mark>
                                    <br/>
                                    &#125;
                                    <br/>
                                    .child&#123;
                                    <br/>
                                    <>&nbsp;&nbsp;</>
                                    width: 40%;
                                    <br/>
                                    &#125;
                                </code>

                            </>
                        }>
            <p>Свойство flex-direction задаёт направление основных осей в контейнере и тем самым определяет
                положение флексов в контейнере. На само направление также влияет значение атрибута dir у
                контейнера.</p>
            <p><strong>Применяется к:</strong> flex контейнерам.</p>
            <p><strong>Значение по-умолчанию:</strong>nowrap</p>
            <dl>
                <dt>row</dt>
                <dd>Главная ось направлена так же, как и ориентация текста, по умолчанию слева направо. Если
                    значение dir задано как rtl, то направление оси идёт справа налево.
                </dd>
                <dt>row-reverse</dt>
                <dd>Похоже на значение row, но меняются местами начальная и конечная точки и главная ось направлена
                    справа налево. Если значение dir задано как rtl, то направление оси идёт слева направо.
                </dd>
                <dt>column</dt>
                <dd>Главная ось располагается вертикально и направлена сверху вниз.</dd>
                <dt>column-reverse</dt>
                <dd>Главная ось располагается вертикально, но меняется положение начальной и конечной точек и ось
                    направлена снизу вверх.
                </dd>
            </dl>
        </ExampleSection>
    )
}
const ContainerFlexFlow:FC = ()=>{
    return (<ExampleSection styleName={'flex-flow'}
                            styleVariants={['row nowrap','row wrap', 'row wrap-reverse', 'row-reverse wrap', 'row-reverse nowrap', 'row-reverse wrap-reverse',  'column nowrap','column wrap', 'column wrap-reverse', 'column-reverse wrap', 'column-reverse nowrap', 'column-reverse wrap-reverse']}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ height: '200px', flexFlow: style as any}}
                                         className={classes.parent}>
                                        <div style={{width: '40%', height: '40%'}} className={classes.child}></div>
                                        <div style={{width: '40%', height: '40%'}} className={classes.child}></div>
                                        <div style={{width: '40%', height: '40%'}}
                                             className={classes.child + " " + classes.active}></div>
                                        <div style={{width: '40%', height: '40%'}} className={classes.child}></div>
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
                                        <mark>flex-flow:{style}</mark>
                                        <br/>
                                        &#125;
                                        <br/>
                                        .child&#123;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        width: 40%;
                                        <br/>
                                        <>&nbsp;&nbsp;</>
                                        height: 40%;
                                        <br/>
                                        &#125;
                                    </code>

                                </>
                            }>
        <p>Свойство flex-flow является сокращённым свойством для отдельных свойств flex-direction и flex-wrap.</p>
        <p><strong>Применяется к:</strong> flex контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> row nowrap</p>
    </ExampleSection>)
}
const ContainerJustifyContent:FC = ()=>{
    return (<ExampleSection styleName={'justify-content'}
                            styleVariants={['flex-start','flex-end', 'center', 'space-between', 'space-around', 'space-evenly']}
                            view={
                                (style) => <>
                                    Здесь текст
                                    <div style={{ height: '200px', justifyContent: style as any}}
                                         className={classes.parent}>
                                        <div  className={classes.child}></div>
                                        <div  className={classes.child}></div>
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
                                        <mark>justify-content:{style}</mark>
                                        <br/>
                                        &#125;
                                    </code>

                                </>
                            }>
        <p>Свойство justify-content определяет, как браузер распределяет пространство вокруг флекс-элементов вдоль главной оси контейнера. Это делается после того, как применяются размеры и автоматические отступы, за исключением ситуации, когда по крайней мере у одного элемента flex-grow больше нуля. При этом не остаётся никакого свободного пространства для манипулирования.</p>
        <p><strong>Применяется к:</strong> flex контейнерам.</p>
        <p><strong>Значение по-умолчанию:</strong> flex-start</p>
        <dl>
            <dt>flex-start</dt>
            <dd>Флексы прижаты к началу строки.
            </dd>
            <dt>flex-end</dt>
            <dd>Флексы прижаты к концу строки.
            </dd>
            <dt>center</dt>
            <dd>Флексы выравниваются по центру строки.</dd>
            <dt>space-between</dt>
            <dd>Флексы равномерно распределяются по всей строке. Первый и последний элемент прижимаются к соответствующим краям контейнера.</dd>
        <dt>space-around</dt>
            <dd>Флексы равномерно распределяются по всей строке. Пустое пространство перед первым и после последнего элементов равно половине пространства между двумя соседними элементами.</dd>
         <dt>space-evenly</dt>
            <dd>Флексы распределяются так, что расстояние между любыми двумя соседними элементами, а также перед первым и после последнего, было одинаковым.</dd>
        </dl>
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

const FlexboxGuidePage: FC = () => {
    return (
        <div className={classes.container}>
        <article>
            <h1>Шпаргалка по Flexbox CSS</h1>
            <p>Вся документация по свойству <code>flex</code> находится на <a target="_blank"
                                                                              href="https://www.w3.org/TR/css-flexbox-1/#flex-containers">официальном
                сайте</a>.</p>
            <h2>Свойства контейнера:</h2>
            <ContainerDisplay/>
            <ContainerFlexDirection/>
            <ContainerFlexWrap/>
            <ContainerFlexFlow/>
            <ContainerJustifyContent/>
            <ContainerAlignItems/>
            <ContainerAlignContent/>
            <h2>Свойства элемента:</h2>
            <ElementOrder/>
            <ElementAlignSelf/>
            <ElementFlexGrow/>
            <ElementFlexShrink/>
            <ElementFlexBasis/>
            <ElementFlex/>

        </article></div>
    )
}

export default FlexboxGuidePage;