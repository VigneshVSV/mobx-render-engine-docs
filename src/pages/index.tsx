import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Box, Stack, Typography, Grid, Paper, Button, Tabs, Tab } from '@mui/material';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
        title={siteConfig.title}
        description="MobX based JSON driven React renderer"
        >
            <Grid container>
                <Heading />
                <Description />
                <Example />
            </Grid>
        </Layout>
    );
}




const examples = ['Button', 'Textfield', 'PlotlyGraph']

const Heading = () : JSX.Element => {

    return (
        <Grid 
            item 
            xs={12} sm={12} lg={12}
            sx={{ 
                justifyContent : 'center', 
                display : 'flex', p : 2, pt : 5
            }}
        >
            <Stack>
                <h1>MobX based JSON driven React renderer</h1>
                {/* <Tabs
                    id="selected-parameter-fields-tab"
                    variant="scrollable"
                    value={0}
                    sx={{ borderBottom: 2, borderColor: 'divider' }}
                >
                    {examples.map((name : string) => {
                        return (
                            <Tab 
                                key={"selected-parameter-fields-tab-"+name}    
                                id={name} 
                                label={name} 
                                sx={{ maxWidth : 150 }} 
                            />
                        )}
                    )}
                </Tabs> */}
            </Stack>
        </Grid>
    )
}


const Description = () => {

    return (
        <Grid 
            item 
            xs={12} sm={12} lg={12}
            sx={{ 
                justifyContent : 'center', 
                display : 'flex', p : 2, pt : 5
            }}
        >
            <Typography sx={{ display : 'flex', flexGrow : 0.25 }}>
                mobx-render-enginer is a JSON driven react component renderer based on MobX. It helps a React developer provide components to users of other languages.
            </Typography>
        </Grid>
    )
}

const Example = () => {

    return(
        <Grid 
            item 
            xs={12} sm={12} lg={12} xl={12}
            sx={{ 
                justifyContent : 'center',
                display : 'flex', p : 2, pt : 5
            }}
        >
          
                <Python />
                <ButtonRight />
                <JSON />
                <ButtonRight />
                <ExampleButton />
        </Grid>
    )
}

const Python = () : JSX.Element => {

    return (
        <Grid 
            item 
            xs={2} sm={2} lg={2} xl={2}
            sx={{ 
                justifyContent : 'center', 
                display : 'flex', p : 2, pt : 5,
                flexDirection : 'column'
            }}                
        >
            <CodeBlock
                language='python'
                title='python code'
                showLineNumbers
            >
                {ButtonCode}
            </CodeBlock>
        </Grid>
    )
}


const JSON = () : JSX.Element => {

    return (
        <Grid 
            item 
            xs={3} sm={3} lg={3} xl={3}
            sx={{ 
                justifyContent : 'center', 
                display : 'flex', p : 2, pt : 5,
                flexDirection : 'column'    
            }}            
        >
            <CodeBlock
                showLineNumbers
                title='generated JSON'
                language='JSON'
               
            >
                {JSONCode}
            </CodeBlock>
        </Grid>
    )
}


const ExampleButton = () : JSX.Element => {

    return (
        <Grid 
            item 
            xs={2} sm={2} lg={2} xl={2}
            sx={{ 
                justifyContent : 'center', 
                display : 'flex', p : 2, pt : 5,
                flexDirection : 'column'
            }}                
        >
            <Button 
                color="secondary"
                fullWidth
                variant="contained"
                size="large"
            >
                My Button Text
            </Button>
        </Grid> 
    )
}

const ButtonRight = () : JSX.Element => {
    return (
        <Grid 
            item 
            xs={1} sm={1} lg={1} xl={1}
            sx={{ 
                justifyContent : 'center', 
                display : 'flex', p : 2, pt : 5,
                flexDirection : 'column'
            }}  
        >
            <Button
                id="arrow-button"
                sx={{ my: 0.5 }}
                variant="text"
                color="primary"
                disabled
            >
                <Typography fontSize={18} fontWeight={900} sx={{ color : 'brown' }}>
                    ≫≫≫
                </Typography>
            </Button>
        </Grid>
    )
}




const ButtonCode = `B = Button(
    fullWidth=True, 
    variant='contained',
    id="some-unique-html-id",
    size="large",
    children="My Button Text",
    color="secondary"
)
B.json()
`

const JSONCode = `{
    "some-unique-html-id" : {
        "componentName": "ContextfulMUIButton",
        "id": "some-unique-html-id",
        "props": {
                "disabled": false,
                "disableRipple": false,
                ...
                "color": "secondary",
                "disableElevation": false,
                "endIcon": null,
                "fullWidth": true,
                "size": "large",
                "startIcon": null,
                "variant": "contained"
        },
        "children": [
            "My Button Text"
        ]
    }
}
`
