import { useEffect, useState } from "react";
import axios from "axios";

function People() {
  const [people, setPeople] = useState(null);
  useEffect(function () {
    axios
      .get("https://crud1-9a38a-default-rtdb.firebaseio.com/people.json")
      .then(({ data }) => {
        const newPeople = Object.keys(data).map((id) => {
          return {
            id: id,
            ...data[id]
          };
        });
        setPeople(newPeople);
      });
   
  }, []);

  let output = "Loading...";
  if (people !== null) {
    output = people.map((person) => (
      <li key={person.id}>
       
        {person.first_name} {person.last_name}
      </li>
    ));
  }
  return <ul>{output}</ul>;
}

export default People;
