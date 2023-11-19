import { useTranslation } from "@pancakeswap/localization";
import { Spinner, Text, Box, Flex, TooltipText, AutoColumn, ColumnCenter, useTooltip } from "@pancakeswap/uikit";

interface ApproveModalContentProps {
  title: string;
  isMM?: boolean;
  isBonus: boolean;
}

export const ApproveModalContent: React.FC<ApproveModalContentProps> = ({ title, isMM, isBonus }) => {
  const { t } = useTranslation();
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <Text>{t("PattieSwap.")}</Text>,
    { placement: "top" }
  );

  return (
    <Box width="100%">
      <Box mb="16px">
        <ColumnCenter>
          <Spinner />
        </ColumnCenter>
      </Box>
      <AutoColumn gap="12px" justify="center">
        <Text bold textAlign="center">
          {title}
        </Text>
        <Flex>
          <Text fontSize="14px">{t("Swapping thru:")}</Text>
          {isMM ? (
            <Text ml="4px" fontSize="14px">
              {t("Pattieswap")}
            </Text>
          ) : isBonus ? (
            <Text ml="4px" fontSize="14px">
              {t("Bonus Route")}
            </Text>
          ) : (
            <>
              <TooltipText ml="4px" fontSize="14px" color="textSubtle" ref={targetRef}>
                {t("Pattieswap")}
              </TooltipText>
              {tooltipVisible && tooltip}
            </>
          )}
        </Flex>
      </AutoColumn>
    </Box>
  );
};
