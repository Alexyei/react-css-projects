import {FC, ReactNode} from "react";
import classes from "./EmmetCheatMy.module.css"
import SyntaxSection from "./data/syntax-section";
import HtmlSection from "./data/html-section";

// https://docs.emmet.io/cheat-sheet/
const Section: FC<{ title: string, description: ReactNode, children: ReactNode, className: string }> = ({
                                                                                                         title,
                                                                                                         description,
                                                                                                         children,
                                                                                                         className
                                                                                                     }) => {
    return (
        <section className={[classes.ch__section, className].join(' ')}>
            <h2 className={classes.ch__section__title}>{title}</h2>
            <div className={classes.ch__section__desc}>{description}</div>
            <div className={classes.ch__section__content}>{children}</div>
        </section>
    )
}
const SubSection: FC<{ title: string, children: ReactNode }> = ({title, children}) => {
    return (
        <section className={classes.ch__subsection}>
            <h3 className={classes.ch__subsection__title}>{title}</h3>
            {children}
        </section>
    )
}
const Snippet: FC<{ name: string, children: ReactNode, aliasAbbr?: string }> = ({name, children: value,aliasAbbr}) => {
    return (
        <dl className={classes.ch__snippet}>
            <dt className={classes.ch__snippet__name}>{name}</dt>
            <dd className={classes.ch__snippet__value}>
                {
                   aliasAbbr && <p className={classes.cn__snippet__alias}>Alias of <span className={classes.cn__snippet__alias__abbr}>{aliasAbbr}</span></p>
                }
                {value}
            </dd>
        </dl>
    )
}
const EmmetCheatMy: FC = () => {
    const sections = [
        {
            title: 'Syntax',
            order: 0
        },
        {
            order: 1,
            title: 'HTML',
            description: <p>All unknown abbreviations will be transformed to tag, e.g. <code>{'foo'}</code> → <code>{'<foo></foo>'}</code>.</p>
        },
        {
            order: 2,
            title: 'CSS',
            description: <><p>CSS module uses fuzzy search to find unknown abbreviations, e.g. <code>ov:h</code> == <code>ov-h</code> == <code>ovh</code> == <code>oh</code>.</p>
		<p>If abbreviation wasn’t found, it is transformed into property name: <code>foo-bar</code> → <code>foo-bar: |;</code></p>
		<p>You can prefix abbreviations with hyphen to produce vendor-prefixed properties: <code>-foo</code></p></>
        },
        {
            order: 3,
            title: 'XSL'
        }
    ];

    function getSectionClass(sectionTitle: string) {
        switch (sectionTitle) {
            case 'Syntax':
                return classes.ch__section__syntax
            case 'HTML':
                return classes.ch__section__syntax
            case 'CSS':
                return classes.ch__section__css
            case 'XSL':
                return classes.ch__section__xsl
            default:
                return ""
        }
    }

    function renderSyntaxSection() {
        const sectionData = SyntaxSection;
        return sectionData.map(el => {
            return <SubSection title={el.name}>
                {el.value.map(snippet =>
                    <Snippet name={snippet.name}>
                        {snippet.value}
                    </Snippet>
                )}
            </SubSection>
        })
    }

    function renderHtmlSection() {
        function tabstopWrapper(children:ReactNode){
            return <span className={classes.ch__tabstop} title="Tabstop">{children}</span>
        }

        const sectionData = HtmlSection(<span className={classes.ch__caret} title="Caret position"></span>,tabstopWrapper);
        return sectionData.map(el =>
            <Snippet name={el.name} aliasAbbr={el.aliasAbbr}>
                {el.value}
            </Snippet>
        )
    }

    function renderSection(sectionTitle: string) {
        switch (sectionTitle) {
            case 'Syntax':
                return renderSyntaxSection()
            case 'HTML':
                return renderHtmlSection()
            // case 'CSS':
            //     return classes.ch__section__css
            // case 'XSL':
            //     return classes.ch__section__xsl
            default:
                return null
        }
    }

    const className = "ch-tabstop"
    const text = `
                 xmp {
                    font - family: monospace;
                    <span class=${className} title="Tabstop">font-size: 16px;</span>
                    color: black;
                    font-weight: 400;
                }`

    return (
        <>
            {/*<pre dangerouslySetInnerHTML={{__html: text}}/>*/}

            <div className={classes.wrapper}>
                <header className={classes.page__header}>
                    <h1 className={classes.site__title}>
                        <a href="/">Emmet Documentation</a>
                    </h1>
                </header>
                <p className={classes.download__a5}>
                    <a href="http://bit.ly/2mLmFAn" className={[classes.btn, classes["btn__primary"]].join(" ")}>Download
                        cheat sheet</a> <span className={classes["download__a5__text"]}>as printable PDF A5</span></p>
                <section className={classes.page__content}>
                    <div className={classes.cheatsheet}>
                        {
                            sections.map((section) =>
                                <Section className={getSectionClass(section.title)} title={section.title}
                                         description={section.description || ""}>
                                    {
                                        renderSection(section.title)
                                    }
                                </Section>)
                        }
                    </div>
                </section>
                <div className={classes.clear}></div>
            </div>
        </>
    )
}
export default EmmetCheatMy;