import RequestForm from "../islands/RequestForm.tsx";

export const Form = () => {
  return (
    <section id="form" class="py-16 overflow-hidden h-[903px]">
      <div class="relative container">
        <div class="absolute left-4 xl:left-40 2xl:left-[172px] -top-[33px] bg-fiolet w-[1400px] h-[853px] rounded-[100%] -z-20" />
        <div class="absolute left-16 xl:left-52 2xl:left-[219px] top-[21px] bg-white w-[1085px] h-[640px] rounded-[100%] -z-10" />
        <div class="flex justify-center absolute left-60 xl:left-[100px] right-0 top-[341px] -translate-y-1/2">
          <RequestForm />
        </div>
      </div>
    </section>
  );
};
