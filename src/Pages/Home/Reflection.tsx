// React Imports
import React, { FC } from "react";
import { Heading, TextArea } from "./Components";

// Redux Imports
import { useSelector } from "react-redux";
import { getReflection, setHomeData, useAppDispatch } from "../../Redux";

interface ReflectionProps {}

const Reflection: FC<ReflectionProps> = () => {
  const reflection = useSelector(getReflection);

  const dispatch = useAppDispatch();

  return (
    <>
      <Heading name="reflection" clearable={!!reflection}>
        Reflect on your day
      </Heading>
      <TextArea
        value={reflection}
        setValue={(value) => dispatch(setHomeData({ reflection: value }))}
        label="Reflection"
        placeholder="Reflection: "
      />
    </>
  );
};

export default Reflection;
