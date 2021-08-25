import React from 'react'

export default function ColorTable( props) {
    console.log( 'ColorTable: props.mycolors' + JSON.stringify(props.colors))
    if (props.colors.length === 0)
        return (<div></div>)
    else {
        return (
            <div>
                <table border="1">
                    <tr><th>Index</th><th>Colors</th></tr>
                    {
                        props.colors.map(( element, index) => {
                            return (
                                <tr key={index}><td>{index+1}</td><td>{element.color}</td></tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}



