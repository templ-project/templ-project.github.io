import {ClassNameMap} from '@material-ui/core/styles/withStyles';

type LocalClassNameMap<ClassKey extends string = string> = Partial<ClassNameMap<ClassKey>>;

export function mergeStyles<ClassKey extends string = string>(
  ...classes: LocalClassNameMap<ClassKey>[]
): LocalClassNameMap<ClassKey> {
  // As a note for the below defintions,
  // the generic form of LocalClassNameMap<ClassKey> is {[key: string]: string}
  // Since we know this by default, there's no need to create custom definitions for the Array methods

  const classKeysRaw = classes
    .map((c: LocalClassNameMap<ClassKey>) => Object.keys(c))
    .reduce((acc, keys) => [...acc, ...keys], []);
  const classKeys = [...new Set(classKeysRaw)].sort();

  return (classKeys
    .map((classKey: string) => ({
      [classKey]: classes
        .map((c: LocalClassNameMap<ClassKey>) => (c as {[key: string]: string})[classKey] || '')
        .filter((v: string) => v)
        .join(' '),
    }))
    .reduce(
      (newClasses: {[key: string]: string}, partialClasses: {[key: string]: string}) => ({
        ...newClasses,
        ...partialClasses,
      }),
      {},
    ) as unknown) as LocalClassNameMap<ClassKey>;
}
