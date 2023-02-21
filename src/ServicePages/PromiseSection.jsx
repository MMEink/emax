import { PromiseSectionContainer } from "../styled";

export default function PromiseSection({ block_section }) {
  return (
    <PromiseSectionContainer>
      <div className="promiseContainer">
        {block_section.map((b, i) => (
          <div key={i}>
            <img src={require(`${b.icon}`)} alt="Icon" />
            <p style={{ lineHeight: "1.8rem" }}>{b.describe}</p>
          </div>
        ))}
      </div>
    </PromiseSectionContainer>
  );
}
