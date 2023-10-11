import React from 'react'
import { Button } from "rsuite";

import "rsuite/dist/rsuite.min.css";

const styles = {
  padding: 20,
  textAlign: "center"
};

export const Btnsuit = () => {
  return (
    <>
      <div style={styles}>
    <Button appearance="primary">Hello World</Button>
  </div>
</>
  )
}
