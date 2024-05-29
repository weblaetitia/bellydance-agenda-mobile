import { Card, Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";

import { setting } from "../../setting/setting";
import { EventExtract } from "../../types/types";

export default function Tab() {
  const [suggestedEvents, setSuggestedEvents] = useState<EventExtract[] | null>();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const raw = await fetch(`${setting.apiUrl}/events/all`);
      const response = await raw.json();
      if (response.body != null) setSuggestedEvents(response.body);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {suggestedEvents != null && suggestedEvents.length > 0 && (
          <>
            <Text h1>Suggested events</Text>
            {suggestedEvents.map((event, i) => {
              return (
                <Card key={i} containerStyle={styles.card}>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Divider />
                  <View style={styles.event}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{
                        uri: event.imageUrl,
                      }}
                    />
                    <Text style={styles.name}>{event.formatedDate}</Text>
                  </View>
                </Card>
              );
            })}
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fonts: {
    marginBottom: 8,
  },
  card: {
    width: "90%",
  },
  event: {
    flexDirection: "row",
    textAlign: "left",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
