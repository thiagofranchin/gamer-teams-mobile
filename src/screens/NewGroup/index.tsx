import { useState } from "react";
import { Container, Content, Icon } from "./styles";
import { groupCreate } from "@storage/group/groupCreate";

import { useNavigation } from "@react-navigation/native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Hightlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  const navigation = useNavigation();

  const [group, setGroup] = useState("");

  async function handleNew() {
    await groupCreate(group);
    navigation.navigate("players", { group: group });
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para add as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          onChangeText={(text) => setGroup(text)}
        />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
