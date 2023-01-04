import {ReactNode} from "react";

const htmlSection =(pointer:ReactNode, tabstopWrapper:(children:ReactNode)=>ReactNode)=> [
    {
        name: '!',
        aliasAbbr: 'html:5',
        value:
            <>
                {'<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8" />\n\t<title>'}
                {tabstopWrapper("Document")}
                {'</title>\n</head>\n<body>\n\t'}
                {pointer}
                {'\n</body>\n</html>'}
            </>
    },
    {
        name: 'a',
        value:
            <>
                {'<a href="'}
                {pointer}
                {'">'}
                {pointer}
                {'</a>'}
            </>
    },
    {
        name: 'a:link',
        value:
            <>
                {'<a href="http://'}
                {pointer}
                {'">'}
                {pointer}
                {'</a>'}
            </>
    },
    {
        name: 'a:mail',
        value:
            <>
                {'<a href="mailto://'}
                {pointer}
                {'">'}
                {pointer}
                {'</a>'}
            </>
    },
    {
        name: 'abbr',
        value:
            <>
                {'<abbr title="'}
                {pointer}
                {'">'}
                {pointer}
                {'</abbr>'}
            </>
    },
    {
        name: 'acronym, acr',
        value:
            <>
                {'<acronym title="'}
                {pointer}
                {'">'}
                {pointer}
                {'</acronym>'}
            </>
    },
    {
        name: 'base',
        value:
            <>
                {'<base title="'}
                {pointer}
                {'" />'}
            </>
    },
    {
        name: 'basefont',
        value:
            <>
                {'<basefont />'}
            </>
    },
]

export default htmlSection;