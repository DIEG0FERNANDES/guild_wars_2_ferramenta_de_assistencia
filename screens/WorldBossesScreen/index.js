import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Body, Card, CardImg, Container, Description, Texto } from "./styles";
import axios from "axios";

const WorldBossesScreen = () => {
  const [bosses, setBosses] = useState([]);
  useEffect(() => {
    fetchWorldBosses();
  }, []);
  const fetchWorldBosses = async () => {
    try {
      const response = await axios.get(
        "https://api.guildwars2.com/v2/worldbosses"
      );
      const bossIds = response.data;
      fetchBossDetails(bossIds);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchBossDetails = async (bossIds) => {
    try {
      const bossPromises = bossIds.map(async (bossId) => {
        const response = await axios.get(
          `https://api.guildwars2.com/v2/worldbosses/${bossId}`
        );
        return {
          id: response.data.id,
          location: response.data.location,
        };
      });

      const bossData = await Promise.all(bossPromises);
      setBosses(bossData);
    } catch (error) {
      console.error(error);
    }
  };
  if (bosses.length === 0) {
    return <Texto>Carregando...</Texto>;
  }

  return (
    <Body>
      <Header />
      <Container>
        {bosses.map((boss) => (
          <Card key={boss.id}>
            <CardImg />
            <Description>
              <Texto>{boss.id}</Texto>
              <Texto>Localizacao:{boss.location}</Texto>
              <Texto>Tempo de Respawn: {boss.spawn_interval} segundos</Texto>
            </Description>
          </Card>
        ))}
      </Container>
    </Body>
  );
};
export default WorldBossesScreen;
