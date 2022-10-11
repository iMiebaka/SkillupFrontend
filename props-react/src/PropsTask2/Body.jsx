import React from "react";

function Body({ setSiteName }) {
  setTimeout(() => setSiteName("Change Site"), 2000);
  return (
    <div>
      {[{numb: 1, num: "Hello"}, {numb: 2}, {numb: 3}, {numb: 4}].map((item, index) => {
        return <h1>{index}</h1>;
      }, this)}
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor vero
      commodi eaque vel consequuntur. Amet nam exercitationem suscipit a,
      recusandae soluta natus doloremque dolores maiores sed, quasi neque totam
      deserunt illo expedita iure. Atque, quo magnam. Repellat, voluptas ex
      expedita sint optio sapiente culpa rerum eum suscipit enim ab adipisci.
      Consectetur assumenda ex aliquid temporibus iusto quo officiis. Commodi
      hic, ratione quo iste beatae et ipsum quos. Quas, aliquid. Distinctio
      vitae iste amet reiciendis, veritatis quia. Nemo excepturi ex modi labore
      suscipit adipisci eveniet optio ipsa! Architecto totam quis explicabo,
      esse ullam quam inventore. Modi repellendus cum minima provident quod
      laborum corporis non natus atque architecto assumenda, quos error
      asperiores voluptatem molestias expedita eligendi fuga suscipit recusandae
      dicta aliquid nobis? Expedita corrupti explicabo, nobis inventore fugit
      iure neque dolor ratione dolorum obcaecati delectus in nihil esse vel
      molestiae quos possimus veniam et, suscipit facilis non, illum sequi.
      Sequi commodi, eius magnam optio quas magni in rerum itaque beatae dolor
      explicabo asperiores. Voluptatibus beatae culpa perspiciatis modi tempora.
      Voluptas excepturi quas blanditiis dignissimos quaerat harum, fugiat
      facilis quasi aspernatur cupiditate. Atque, necessitatibus nulla. Dolores,
      adipisci possimus mollitia quibusdam, deleniti quo vel sunt molestiae
      inventore nam in aut provident vero voluptatum tempora!
    </div>
  );
}

export default Body;
