import React, { forwardRef } from 'react';

const Parameters = (props, refs) => {
    return (
        <div>
            Here are some parameters
        </div>
    );
};

// Using forwardRef so it can child of Material-UI stuff.
//  See: https://material-ui.com/guides/composition/#caveat-with-refs
export default forwardRef(Parameters);
// export default Parameters;