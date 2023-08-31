type Challenge = {
  id: number;
  name: string;
  description: string;
  start_time: string;
  end_time: string;
  participate_start_time: string;
  participate_end_time: string;
  count_participant: number;
  images: string[];
  targets: null | Target[];
};

type TargetCode = 'step' | 'walk';
type TargetUnit = 'meter' | 'step';
type Target = {
  attribute_code: TargetCode;
  attribute_unit: TargetUnit;
  attribute_value: number;
  count_participant: number;
  frequency: number;
};
