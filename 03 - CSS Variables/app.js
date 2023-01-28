let inputs = document.querySelectorAll(".controls input");

let updateChange = (input) => {
  const suffix = input.explicitOriginalTarget.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${input.explicitOriginalTarget.name}`,
    `${input.explicitOriginalTarget.value}${suffix}`
  );
};

inputs.forEach((Element) => Element.addEventListener("change", updateChange));
inputs.forEach((Element) =>
  Element.addEventListener("mousemove", updateChange)
);
