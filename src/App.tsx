//import Message from './Message';
import ListGroup from "./component/ListGroup";

import Alert from "./component/Alert";
import Button from "./component/Button";
import { useState } from "react";

function App() {
  let items = ["Hong Kong", "Toronto", "Toyota", "New York", "Souel"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  //   <div>
  //   <Alert>
  //     Hello <span>World</span>
  //   </Alert>
  // </div>

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cites"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>button alert</Alert>
        )}
        <Button color="Primary" onClick={() => setAlertVisible(true)}>
          Select
        </Button>
      </div>
      <div>
        <Button color="dark" onClick={() => console.log("Clicked")}>
          OptionalColor
        </Button>
      </div>
    </>
  );

  //return <div><Message></Message></div>

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cites"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );
}

export default App;
