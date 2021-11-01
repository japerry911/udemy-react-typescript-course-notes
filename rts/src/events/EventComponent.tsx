const EventComponent: React.FC = () => {
  const onChange = (
    event: React.ChangeEventHandler<HTMLInputElement> | undefined
  ) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
