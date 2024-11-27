import { Box, Card, Text, Link, Heading } from '@radix-ui/themes';

export function Tips() {
  return (
    <Card size="2" style={{ marginTop: 32 }}>      
      <Box mb="4">
        <Heading size="3" mb="2">💳 Credit Cards</Heading>
        <Text as="p">
          Chase Sapphire Preferred offers 60,000 bonus points - perfect for flights and hotels. 
          <Link href="your-referral-link"> Apply here</Link>
        </Text>
      </Box>

      <Box mb="4">
        <Heading size="3" mb="2">📱 eSIM</Heading>
        <Text as="p">
          Airalo offers affordable data plans worldwide. Get $3 off your first eSIM with code TRAVEL23. 
          <Link href="your-referral-link"> Get started</Link>
        </Text>
      </Box>

      <Box mb="4">
        <Heading size="3" mb="2">🔒 VPN</Heading>
        <Text as="p">
          NordVPN ensures secure browsing and helps bypass geo-restrictions. 
          <Link href="your-referral-link"> Get 68% off</Link>
        </Text>
      </Box>

      <Box>
        <Heading size="3" mb="2">📚 Travel Guides</Heading>
        <Text as="p">
          Lonely Planet guides are available on Amazon with detailed city insights. 
          <Link href="your-referral-link"> Browse guides</Link>
        </Text>
      </Box>
    </Card>
  );
}