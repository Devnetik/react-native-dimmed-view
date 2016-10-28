# Dimmed View

[![Gitter](https://badges.gitter.im/Devnetik/react-native-dimmed-view.svg)](https://gitter.im/Devnetik/react-native-dimmed-view?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm](https://img.shields.io/npm/dm/react-native-dimmed-view.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-dimmed-view)
[![npm](https://img.shields.io/npm/v/react-native-dimmed-view.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-dimmed-view)


## Getting started
```sh
npm install --save react-native-dimmed-view
```

## Example

```
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import Dimmer from './path/to/react-native-dimmed-view';

export default class Viewport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.toggleActive = this.toggleActive.bind(this);
    }
    
    toggleActive() {
        this.setState({active: !this.state.active});
    }
    
    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.toggleActive}>
                    <Text>Toggle Dimmer</Text>
                </TouchableHighlight>
                <Dimmer darkness={this.state.active ? 0.75 : 0}>
                    <Text>I am {this.state.active ? 'dimmed' : 'not dimmed'}</Text>
                </Dimmer>
            </View>
        );
    }
}
```

## Props

- `darkness ` darkness as percentage from 0 to 1
- `dimmerStyle ` the style of the dimmer (default darkness is `0.5`)

## Contribute

Comments, Issues and Pull Requests are welcomed!

## License (MIT)

Copyright (c) 2016 Devnetik

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
