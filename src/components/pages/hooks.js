import React from 'react';
import UseState from "../hooks/UseState";
import UseEffect from "../hooks/UseEffect";
import UseContext from "../hooks/UseContext";

function Hooks(props) {
    return (
        <div className={''}>
            <h1>Hooks</h1>
            <p>
                Hooks are a new addition in React 16.8. They let you use state and other React features without writing
                a class. <br/>

            </p>

            <ul>
                <li>
                    <p><a href="#basic-hooks">Basic Hooks</a></p>
                    <ul>
                        <li><a href="#usestate"><code className="gatsby-code-text">useState</code></a></li>
                        <li><a href="#useeffect"><code className="gatsby-code-text">useEffect</code></a></li>
                        <li><a href="#usecontext"><code className="gatsby-code-text">useContext</code></a></li>
                    </ul>
                </li>
                <li>
                    <p><a href="#additional-hooks">Additional Hooks</a></p>
                    <ul>
                        <li><a href="#usereducer"><code className="gatsby-code-text">useReducer</code></a></li>
                        <li><a href="#usecallback"><code className="gatsby-code-text">useCallback</code></a></li>
                        <li><a href="#usememo"><code className="gatsby-code-text">useMemo</code></a></li>
                        <li><a href="#useref"><code className="gatsby-code-text">useRef</code></a></li>
                        <li><a href="#useimperativehandle"><code className="gatsby-code-text">useImperativeHandle</code></a>
                        </li>
                        <li><a href="#uselayouteffect"><code className="gatsby-code-text">useLayoutEffect</code></a>
                        </li>
                        <li><a href="#usedebugvalue"><code className="gatsby-code-text">useDebugValue</code></a></li>
                        <li><a href="#usedeferredvalue"><code className="gatsby-code-text">useDeferredValue</code></a>
                        </li>
                        <li><a href="#usetransition"><code className="gatsby-code-text">useTransition</code></a></li>
                        <li><a href="#useid"><code className="gatsby-code-text">useId</code></a></li>
                    </ul>
                </li>
                <li>
                    <p><a href="#library-hooks">Library Hooks</a></p>
                    <ul>
                        <li><a href="#usesyncexternalstore"><code
                            className="gatsby-code-text">useSyncExternalStore</code></a></li>
                        <li><a href="#useinsertioneffect"><code
                            className="gatsby-code-text">useInsertionEffect</code></a></li>
                    </ul>
                </li>
            </ul>

            <p>// check code</p>


{/*function Example() {*/}
{/*                    // Declare a new state variable, which we'll call "count"*/}
{/*                    const [count, setCount] = useState(0);*/}

{/*                    return (*/}
{/*                    <div>*/}
{/*                    <p>You clicked {count} times</p>*/}
{/*                    <button onClick={() => setCount(count + 1)}>*/}
{/*                    Click me*/}
{/*                    </button>*/}
{/*                    </div>*/}
{/*                    );*/}
{/*                }*/}

            <p>
                This new function useState is the first “Hook” we’ll learn about;
            </p>

            {/*<CounterClass />*/}
            {/*<UseEffect />*/}
            <UseContext />
        </div>
    );
}

export default Hooks;